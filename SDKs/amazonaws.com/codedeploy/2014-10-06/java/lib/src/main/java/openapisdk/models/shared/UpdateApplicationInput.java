package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateApplicationInput
 * Represents the input of an <code>UpdateApplication</code> operation.
**/
public class UpdateApplicationInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationName")
    public String applicationName;
    public UpdateApplicationInput withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newApplicationName")
    public String newApplicationName;
    public UpdateApplicationInput withNewApplicationName(String newApplicationName) {
        this.newApplicationName = newApplicationName;
        return this;
    }
}