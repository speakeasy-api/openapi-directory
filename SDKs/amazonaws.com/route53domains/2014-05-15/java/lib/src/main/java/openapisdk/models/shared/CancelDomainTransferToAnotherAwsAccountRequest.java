package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CancelDomainTransferToAnotherAwsAccountRequest
 * The CancelDomainTransferToAnotherAwsAccount request includes the following element.
**/
public class CancelDomainTransferToAnotherAwsAccountRequest {
    @JsonProperty("DomainName")
    public String domainName;
    public CancelDomainTransferToAnotherAwsAccountRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}