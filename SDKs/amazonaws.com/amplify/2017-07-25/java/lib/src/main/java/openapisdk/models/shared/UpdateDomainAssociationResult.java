package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateDomainAssociationResult
 *  The result structure for the update domain association request. 
**/
public class UpdateDomainAssociationResult {
    @JsonProperty("domainAssociation")
    public DomainAssociation domainAssociation;
    public UpdateDomainAssociationResult withDomainAssociation(DomainAssociation domainAssociation) {
        this.domainAssociation = domainAssociation;
        return this;
    }
}