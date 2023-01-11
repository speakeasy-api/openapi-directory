package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * TypedAttributeValue
 * Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value.
**/
public class TypedAttributeValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BinaryValue")
    public String binaryValue;
    public TypedAttributeValue withBinaryValue(String binaryValue) {
        this.binaryValue = binaryValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BooleanValue")
    public Boolean booleanValue;
    public TypedAttributeValue withBooleanValue(Boolean booleanValue) {
        this.booleanValue = booleanValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("DatetimeValue")
    public OffsetDateTime datetimeValue;
    public TypedAttributeValue withDatetimeValue(OffsetDateTime datetimeValue) {
        this.datetimeValue = datetimeValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberValue")
    public String numberValue;
    public TypedAttributeValue withNumberValue(String numberValue) {
        this.numberValue = numberValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StringValue")
    public String stringValue;
    public TypedAttributeValue withStringValue(String stringValue) {
        this.stringValue = stringValue;
        return this;
    }
}