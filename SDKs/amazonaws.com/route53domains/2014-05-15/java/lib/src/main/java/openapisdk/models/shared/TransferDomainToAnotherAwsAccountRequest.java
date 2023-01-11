package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TransferDomainToAnotherAwsAccountRequest
 * The TransferDomainToAnotherAwsAccount request includes the following elements.
**/
public class TransferDomainToAnotherAwsAccountRequest {
    @JsonProperty("AccountId")
    public String accountId;
    public TransferDomainToAnotherAwsAccountRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("DomainName")
    public String domainName;
    public TransferDomainToAnotherAwsAccountRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}