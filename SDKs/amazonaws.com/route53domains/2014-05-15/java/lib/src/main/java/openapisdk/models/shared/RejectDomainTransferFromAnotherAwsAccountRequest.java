package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RejectDomainTransferFromAnotherAwsAccountRequest
 * The RejectDomainTransferFromAnotherAwsAccount request includes the following element.
**/
public class RejectDomainTransferFromAnotherAwsAccountRequest {
    @JsonProperty("DomainName")
    public String domainName;
    public RejectDomainTransferFromAnotherAwsAccountRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}