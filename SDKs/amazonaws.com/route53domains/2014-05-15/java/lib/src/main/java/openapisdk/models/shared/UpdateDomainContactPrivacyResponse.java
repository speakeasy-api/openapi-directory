package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateDomainContactPrivacyResponse
 * The UpdateDomainContactPrivacy response includes the following element.
**/
public class UpdateDomainContactPrivacyResponse {
    @JsonProperty("OperationId")
    public String operationId;
    public UpdateDomainContactPrivacyResponse withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
}