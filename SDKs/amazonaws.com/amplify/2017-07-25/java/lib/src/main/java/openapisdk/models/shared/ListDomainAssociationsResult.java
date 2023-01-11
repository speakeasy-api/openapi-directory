package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDomainAssociationsResult
 *  The result structure for the list domain association request. 
**/
public class ListDomainAssociationsResult {
    @JsonProperty("domainAssociations")
    public DomainAssociation[] domainAssociations;
    public ListDomainAssociationsResult withDomainAssociations(DomainAssociation[] domainAssociations) {
        this.domainAssociations = domainAssociations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDomainAssociationsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}