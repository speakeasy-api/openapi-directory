package shared

// PropertyTypeAttribute
// Contains an asset attribute property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#attributes">Attributes</a> in the <i>IoT SiteWise User Guide</i>.
type PropertyTypeAttribute struct {
	DefaultValue *string `json:"defaultValue,omitempty"`
}

// PropertyTypeTransform
// <p>Contains an asset transform property. A transform is a one-to-one mapping of a property's data points from one form to another. For example, you can use a transform to convert a Celsius data stream to Fahrenheit by applying the transformation expression to each data point of the Celsius stream. A transform can only have a data type of <code>DOUBLE</code> and consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#transforms">Transforms</a> in the <i>IoT SiteWise User Guide</i>.</p>
type PropertyTypeTransform struct {
	Expression       string                     `json:"expression"`
	ProcessingConfig *TransformProcessingConfig `json:"processingConfig,omitempty"`
	Variables        []ExpressionVariable       `json:"variables"`
}

// PropertyType
// Contains a property type, which can be one of <code>attribute</code>, <code>measurement</code>, <code>metric</code>, or <code>transform</code>.
type PropertyType struct {
	Attribute   *PropertyTypeAttribute `json:"attribute,omitempty"`
	Measurement *Measurement           `json:"measurement,omitempty"`
	Metric      *Metric                `json:"metric,omitempty"`
	Transform   *PropertyTypeTransform `json:"transform,omitempty"`
}
