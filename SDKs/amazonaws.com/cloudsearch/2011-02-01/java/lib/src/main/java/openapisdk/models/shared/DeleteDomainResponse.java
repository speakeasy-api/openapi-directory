package openapisdk.models.shared;



/**
 * DeleteDomainResponse
 * A response message that contains the status of a newly deleted domain, or no status if the domain has already been completely deleted.
**/
public class DeleteDomainResponse {
    public DomainStatus domainStatus;
    public DeleteDomainResponse withDomainStatus(DomainStatus domainStatus) {
        this.domainStatus = domainStatus;
        return this;
    }
}