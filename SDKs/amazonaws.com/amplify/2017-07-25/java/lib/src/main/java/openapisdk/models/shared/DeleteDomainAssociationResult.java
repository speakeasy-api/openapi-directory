package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteDomainAssociationResult {
    @JsonProperty("domainAssociation")
    public DomainAssociation domainAssociation;
    public DeleteDomainAssociationResult withDomainAssociation(DomainAssociation domainAssociation) {
        this.domainAssociation = domainAssociation;
        return this;
    }
}