package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Diagnostics
 * Diagnostic information about executable scripts that are part of a deployment.
**/
public class Diagnostics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public LifecycleErrorCodeEnum errorCode;
    public Diagnostics withErrorCode(LifecycleErrorCodeEnum errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logTail")
    public String logTail;
    public Diagnostics withLogTail(String logTail) {
        this.logTail = logTail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public Diagnostics withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scriptName")
    public String scriptName;
    public Diagnostics withScriptName(String scriptName) {
        this.scriptName = scriptName;
        return this;
    }
}