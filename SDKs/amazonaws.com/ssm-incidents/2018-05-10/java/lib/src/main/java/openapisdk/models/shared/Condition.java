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
 * Condition
 * A conditional statement with which to compare a value, after a timestamp, before a timestamp, or equal to a string or integer. If multiple conditions are specified, the conditionals become an <code>AND</code>ed statement. If multiple values are specified for a conditional, the values are <code>OR</code>d.
**/
public class Condition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("after")
    public OffsetDateTime after;
    public Condition withAfter(OffsetDateTime after) {
        this.after = after;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("before")
    public OffsetDateTime before;
    public Condition withBefore(OffsetDateTime before) {
        this.before = before;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("equals")
    public AttributeValueList equals;
    public Condition withEquals(AttributeValueList equals) {
        this.equals = equals;
        return this;
    }
}