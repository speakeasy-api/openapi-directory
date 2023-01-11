package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeCustomDomainsResponse {
    @JsonProperty("CustomDomains")
    public CustomDomain[] customDomains;
    public DescribeCustomDomainsResponse withCustomDomains(CustomDomain[] customDomains) {
        this.customDomains = customDomains;
        return this;
    }
    @JsonProperty("DNSTarget")
    public String dnsTarget;
    public DescribeCustomDomainsResponse withDnsTarget(String dnsTarget) {
        this.dnsTarget = dnsTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeCustomDomainsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("ServiceArn")
    public String serviceArn;
    public DescribeCustomDomainsResponse withServiceArn(String serviceArn) {
        this.serviceArn = serviceArn;
        return this;
    }
}