package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AccessPreviewStatusReason
 * Provides more details about the current status of the access preview. For example, if the creation of the access preview fails, a <code>Failed</code> status is returned. This failure can be due to an internal issue with the analysis or due to an invalid proposed resource configuration.
**/
public class AccessPreviewStatusReason {
    @JsonProperty("code")
    public AccessPreviewStatusReasonCodeEnum code;
    public AccessPreviewStatusReason withCode(AccessPreviewStatusReasonCodeEnum code) {
        this.code = code;
        return this;
    }
}