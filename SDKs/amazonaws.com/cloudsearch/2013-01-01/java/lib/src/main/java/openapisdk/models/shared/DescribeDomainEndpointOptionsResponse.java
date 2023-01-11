package openapisdk.models.shared;



/**
 * DescribeDomainEndpointOptionsResponse
 * The result of a <code>DescribeDomainEndpointOptions</code> request. Contains the status and configuration of a search domain's endpoint options. 
**/
public class DescribeDomainEndpointOptionsResponse {
    public DomainEndpointOptionsStatus domainEndpointOptions;
    public DescribeDomainEndpointOptionsResponse withDomainEndpointOptions(DomainEndpointOptionsStatus domainEndpointOptions) {
        this.domainEndpointOptions = domainEndpointOptions;
        return this;
    }
}