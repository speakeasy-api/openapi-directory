package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateDomainAssociationResult
 *  The result structure for the create domain association request. 
**/
public class CreateDomainAssociationResult {
    @JsonProperty("domainAssociation")
    public DomainAssociation domainAssociation;
    public CreateDomainAssociationResult withDomainAssociation(DomainAssociation domainAssociation) {
        this.domainAssociation = domainAssociation;
        return this;
    }
}