package openapisdk.models.shared;



/**
 * DescribeDomainsResponse
 * The result of a <code>DescribeDomains</code> request. Contains the status of the domains specified in the request or all domains owned by the account.
**/
public class DescribeDomainsResponse {
    public DomainStatus[] domainStatusList;
    public DescribeDomainsResponse withDomainStatusList(DomainStatus[] domainStatusList) {
        this.domainStatusList = domainStatusList;
        return this;
    }
}