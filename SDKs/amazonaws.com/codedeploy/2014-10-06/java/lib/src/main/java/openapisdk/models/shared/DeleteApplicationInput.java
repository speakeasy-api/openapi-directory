package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteApplicationInput
 * Represents the input of a <code>DeleteApplication</code> operation.
**/
public class DeleteApplicationInput {
    @JsonProperty("applicationName")
    public String applicationName;
    public DeleteApplicationInput withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
}