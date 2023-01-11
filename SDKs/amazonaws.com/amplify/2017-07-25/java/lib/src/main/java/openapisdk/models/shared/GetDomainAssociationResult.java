package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetDomainAssociationResult
 *  The result structure for the get domain association request. 
**/
public class GetDomainAssociationResult {
    @JsonProperty("domainAssociation")
    public DomainAssociation domainAssociation;
    public GetDomainAssociationResult withDomainAssociation(DomainAssociation domainAssociation) {
        this.domainAssociation = domainAssociation;
        return this;
    }
}