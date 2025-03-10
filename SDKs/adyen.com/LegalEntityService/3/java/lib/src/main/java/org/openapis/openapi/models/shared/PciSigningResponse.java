/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PciSigningResponse - OK - the request has succeeded.
 */
public class PciSigningResponse {
    /**
     * The unique identifiers of the signed PCI documents.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pciQuestionnaireIds")
    public String[] pciQuestionnaireIds;

    public PciSigningResponse withPciQuestionnaireIds(String[] pciQuestionnaireIds) {
        this.pciQuestionnaireIds = pciQuestionnaireIds;
        return this;
    }
    
    /**
     * The [legal entity ID](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) of the individual who signed the PCI questionnaire.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signedBy")
    public String signedBy;

    public PciSigningResponse withSignedBy(String signedBy) {
        this.signedBy = signedBy;
        return this;
    }
    
    public PciSigningResponse(){}
}
