/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class LegalEntityInfoRequiredTypeInput {
    /**
     * List of legal entities associated with the current legal entity.
     * For example, ultimate beneficial owners associated with an organization through ownership or control, or as signatories.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityAssociations")
    public LegalEntityAssociationInput[] entityAssociations;

    public LegalEntityInfoRequiredTypeInput withEntityAssociations(LegalEntityAssociationInput[] entityAssociations) {
        this.entityAssociations = entityAssociations;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individual")
    public IndividualInput individual;

    public LegalEntityInfoRequiredTypeInput withIndividual(IndividualInput individual) {
        this.individual = individual;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public OrganizationInput organization;

    public LegalEntityInfoRequiredTypeInput withOrganization(OrganizationInput organization) {
        this.organization = organization;
        return this;
    }
    
    /**
     * Your reference for the legal entity, maximum 150 characters.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reference")
    public String reference;

    public LegalEntityInfoRequiredTypeInput withReference(String reference) {
        this.reference = reference;
        return this;
    }
    
    /**
     * The type of legal entity.
     * 
     *  Possible values: **individual** or **organization**
     */
    @JsonProperty("type")
    public LegalEntityInfoRequiredTypeTypeEnum type;

    public LegalEntityInfoRequiredTypeInput withType(LegalEntityInfoRequiredTypeTypeEnum type) {
        this.type = type;
        return this;
    }
    
    public LegalEntityInfoRequiredTypeInput(@JsonProperty("type") LegalEntityInfoRequiredTypeTypeEnum type) {
        this.type = type;
  }
}
