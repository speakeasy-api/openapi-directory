package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TypedAttributeValueRange
 * A range of attribute values. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#rangefilters">Range Filters</a>.
**/
public class TypedAttributeValueRange {
    @JsonProperty("EndMode")
    public RangeModeEnum endMode;
    public TypedAttributeValueRange withEndMode(RangeModeEnum endMode) {
        this.endMode = endMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndValue")
    public TypedAttributeValue endValue;
    public TypedAttributeValueRange withEndValue(TypedAttributeValue endValue) {
        this.endValue = endValue;
        return this;
    }
    @JsonProperty("StartMode")
    public RangeModeEnum startMode;
    public TypedAttributeValueRange withStartMode(RangeModeEnum startMode) {
        this.startMode = startMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartValue")
    public TypedAttributeValue startValue;
    public TypedAttributeValueRange withStartValue(TypedAttributeValue startValue) {
        this.startValue = startValue;
        return this;
    }
}