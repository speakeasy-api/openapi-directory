package openapisdk.models.shared;



/**
 * CreateDomainResponse
 * The result of a <code>CreateDomainRequest</code>. Contains the status of a newly created domain.
**/
public class CreateDomainResponse {
    public DomainStatus domainStatus;
    public CreateDomainResponse withDomainStatus(DomainStatus domainStatus) {
        this.domainStatus = domainStatus;
        return this;
    }
}