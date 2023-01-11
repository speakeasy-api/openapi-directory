package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Operator
 * Contains a logical operation for comparing the value of a field with a specified value.
**/
public class Operator {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public OperatorTypeEnum type;
    public Operator withType(OperatorTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public Operator withValues(String[] values) {
        this.values = values;
        return this;
    }
}