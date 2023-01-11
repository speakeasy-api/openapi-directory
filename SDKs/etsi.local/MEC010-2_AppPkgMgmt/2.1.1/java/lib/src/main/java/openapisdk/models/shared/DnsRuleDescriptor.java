package openapisdk.models.shared;



public class DnsRuleDescriptor {
    public String dnsRuleId;
    public DnsRuleDescriptor withDnsRuleId(String dnsRuleId) {
        this.dnsRuleId = dnsRuleId;
        return this;
    }
    public String domainName;
    public DnsRuleDescriptor withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    public String ipAddress;
    public DnsRuleDescriptor withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    public IpAddressTypeEnum ipAddressType;
    public DnsRuleDescriptor withIpAddressType(IpAddressTypeEnum ipAddressType) {
        this.ipAddressType = ipAddressType;
        return this;
    }
    public Long ttl;
    public DnsRuleDescriptor withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}