package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UsageInstruction
 * Additional information provided by the administrator.
**/
public class UsageInstruction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public UsageInstruction withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public UsageInstruction withValue(String value) {
        this.value = value;
        return this;
    }
}