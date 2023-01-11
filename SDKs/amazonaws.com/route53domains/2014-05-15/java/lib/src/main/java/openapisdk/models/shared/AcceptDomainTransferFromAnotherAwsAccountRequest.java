package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AcceptDomainTransferFromAnotherAwsAccountRequest
 * The AcceptDomainTransferFromAnotherAwsAccount request includes the following elements.
**/
public class AcceptDomainTransferFromAnotherAwsAccountRequest {
    @JsonProperty("DomainName")
    public String domainName;
    public AcceptDomainTransferFromAnotherAwsAccountRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonProperty("Password")
    public String password;
    public AcceptDomainTransferFromAnotherAwsAccountRequest withPassword(String password) {
        this.password = password;
        return this;
    }
}