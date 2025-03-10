/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RedshiftInstanceDetails - Details about the Amazon Redshift instances that Amazon Web Services recommends that you purchase.
 */
public class RedshiftInstanceDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentGeneration")
    public Boolean currentGeneration;

    public RedshiftInstanceDetails withCurrentGeneration(Boolean currentGeneration) {
        this.currentGeneration = currentGeneration;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Family")
    public String family;

    public RedshiftInstanceDetails withFamily(String family) {
        this.family = family;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NodeType")
    public String nodeType;

    public RedshiftInstanceDetails withNodeType(String nodeType) {
        this.nodeType = nodeType;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Region")
    public String region;

    public RedshiftInstanceDetails withRegion(String region) {
        this.region = region;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SizeFlexEligible")
    public Boolean sizeFlexEligible;

    public RedshiftInstanceDetails withSizeFlexEligible(Boolean sizeFlexEligible) {
        this.sizeFlexEligible = sizeFlexEligible;
        return this;
    }
    
    public RedshiftInstanceDetails(){}
}
