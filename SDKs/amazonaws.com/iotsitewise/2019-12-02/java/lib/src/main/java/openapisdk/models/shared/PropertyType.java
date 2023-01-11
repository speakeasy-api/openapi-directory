package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PropertyType
 * Contains a property type, which can be one of <code>attribute</code>, <code>measurement</code>, <code>metric</code>, or <code>transform</code>.
**/
public class PropertyType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attribute")
    public Attribute attribute;
    public PropertyType withAttribute(Attribute attribute) {
        this.attribute = attribute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("measurement")
    public Measurement measurement;
    public PropertyType withMeasurement(Measurement measurement) {
        this.measurement = measurement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metric")
    public Metric metric;
    public PropertyType withMetric(Metric metric) {
        this.metric = metric;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transform")
    public Transform transform;
    public PropertyType withTransform(Transform transform) {
        this.transform = transform;
        return this;
    }
}