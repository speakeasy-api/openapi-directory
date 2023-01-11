package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateApplicationOutput
 * Represents the output of a <code>CreateApplication</code> operation.
**/
public class CreateApplicationOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationId")
    public String applicationId;
    public CreateApplicationOutput withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}