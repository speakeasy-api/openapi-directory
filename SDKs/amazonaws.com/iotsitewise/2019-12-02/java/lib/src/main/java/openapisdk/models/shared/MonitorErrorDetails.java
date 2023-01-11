package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MonitorErrorDetails
 * Contains IoT SiteWise Monitor error details.
**/
public class MonitorErrorDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public MonitorErrorCodeEnum code;
    public MonitorErrorDetails withCode(MonitorErrorCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public MonitorErrorDetails withMessage(String message) {
        this.message = message;
        return this;
    }
}