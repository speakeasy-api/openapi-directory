package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StatusReason
 * Provides more details about the current status of the analyzer. For example, if the creation for the analyzer fails, a <code>Failed</code> status is returned. For an analyzer with organization as the type, this failure can be due to an issue with creating the service-linked roles required in the member accounts of the Amazon Web Services organization.
**/
public class StatusReason {
    @JsonProperty("code")
    public ReasonCodeEnum code;
    public StatusReason withCode(ReasonCodeEnum code) {
        this.code = code;
        return this;
    }
}