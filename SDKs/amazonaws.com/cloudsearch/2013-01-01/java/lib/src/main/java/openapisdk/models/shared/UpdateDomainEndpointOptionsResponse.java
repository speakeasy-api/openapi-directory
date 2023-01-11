package openapisdk.models.shared;



/**
 * UpdateDomainEndpointOptionsResponse
 * The result of a <code>UpdateDomainEndpointOptions</code> request. Contains the configuration and status of the domain's endpoint options. 
**/
public class UpdateDomainEndpointOptionsResponse {
    public DomainEndpointOptionsStatus domainEndpointOptions;
    public UpdateDomainEndpointOptionsResponse withDomainEndpointOptions(DomainEndpointOptionsStatus domainEndpointOptions) {
        this.domainEndpointOptions = domainEndpointOptions;
        return this;
    }
}