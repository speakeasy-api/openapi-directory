package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDomainNameserversRequest
 * <p>Replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p> <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email. </p>
**/
public class UpdateDomainNameserversRequest {
    @JsonProperty("DomainName")
    public String domainName;
    public UpdateDomainNameserversRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FIAuthKey")
    public java.util.Map<String, Object> fiAuthKey;
    public UpdateDomainNameserversRequest withFiAuthKey(java.util.Map<String, Object> fiAuthKey) {
        this.fiAuthKey = fiAuthKey;
        return this;
    }
    @JsonProperty("Nameservers")
    public Nameserver[] nameservers;
    public UpdateDomainNameserversRequest withNameservers(Nameserver[] nameservers) {
        this.nameservers = nameservers;
        return this;
    }
}