package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PhaseContext
 * Additional information about a build phase that has an error. You can use this information for troubleshooting.
**/
public class PhaseContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public PhaseContext withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusCode")
    public String statusCode;
    public PhaseContext withStatusCode(String statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}