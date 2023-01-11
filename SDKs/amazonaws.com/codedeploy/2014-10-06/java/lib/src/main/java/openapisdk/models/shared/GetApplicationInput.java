package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetApplicationInput
 * Represents the input of a <code>GetApplication</code> operation.
**/
public class GetApplicationInput {
    @JsonProperty("applicationName")
    public String applicationName;
    public GetApplicationInput withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
}