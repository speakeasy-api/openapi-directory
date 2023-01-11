package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SubDomain
 *  The subdomain for the domain association. 
**/
public class SubDomain {
    @JsonProperty("dnsRecord")
    public String dnsRecord;
    public SubDomain withDnsRecord(String dnsRecord) {
        this.dnsRecord = dnsRecord;
        return this;
    }
    @JsonProperty("subDomainSetting")
    public SubDomainSetting subDomainSetting;
    public SubDomain withSubDomainSetting(SubDomainSetting subDomainSetting) {
        this.subDomainSetting = subDomainSetting;
        return this;
    }
    @JsonProperty("verified")
    public Boolean verified;
    public SubDomain withVerified(Boolean verified) {
        this.verified = verified;
        return this;
    }
}