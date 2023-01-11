package openapisdk.models.shared;



/**
 * DomainEndpointOptionsStatus
 * The configuration and status of the domain's endpoint options.
**/
public class DomainEndpointOptionsStatus {
    public DomainEndpointOptions options;
    public DomainEndpointOptionsStatus withOptions(DomainEndpointOptions options) {
        this.options = options;
        return this;
    }
    public OptionStatus status;
    public DomainEndpointOptionsStatus withStatus(OptionStatus status) {
        this.status = status;
        return this;
    }
}