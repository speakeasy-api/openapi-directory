package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsApiCallActionDomainDetails
 * Provided if <code>CallerType</code> is <code>domain</code>. It provides information about the DNS domain that issued the API call.
**/
public class AwsApiCallActionDomainDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Domain")
    public String domain;
    public AwsApiCallActionDomainDetails withDomain(String domain) {
        this.domain = domain;
        return this;
    }
}