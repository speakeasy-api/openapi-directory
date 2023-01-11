package openapisdk.models.shared;



/**
 * CreateDomainResponse
 * A response message that contains the status of a newly created domain.
**/
public class CreateDomainResponse {
    public DomainStatus domainStatus;
    public CreateDomainResponse withDomainStatus(DomainStatus domainStatus) {
        this.domainStatus = domainStatus;
        return this;
    }
}