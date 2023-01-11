package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Transform
 * <p>Contains an asset transform property. A transform is a one-to-one mapping of a property's data points from one form to another. For example, you can use a transform to convert a Celsius data stream to Fahrenheit by applying the transformation expression to each data point of the Celsius stream. A transform can only have a data type of <code>DOUBLE</code> and consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#transforms">Transforms</a> in the <i>IoT SiteWise User Guide</i>.</p>
**/
public class Transform {
    @JsonProperty("expression")
    public String expression;
    public Transform withExpression(String expression) {
        this.expression = expression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processingConfig")
    public TransformProcessingConfig processingConfig;
    public Transform withProcessingConfig(TransformProcessingConfig processingConfig) {
        this.processingConfig = processingConfig;
        return this;
    }
    @JsonProperty("variables")
    public ExpressionVariable[] variables;
    public Transform withVariables(ExpressionVariable[] variables) {
        this.variables = variables;
        return this;
    }
}