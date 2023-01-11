package openapisdk.models.shared;



/**
 * DescribeDomainsResponse
 * A response message that contains the status of one or more domains.
**/
public class DescribeDomainsResponse {
    public DomainStatus[] domainStatusList;
    public DescribeDomainsResponse withDomainStatusList(DomainStatus[] domainStatusList) {
        this.domainStatusList = domainStatusList;
        return this;
    }
}