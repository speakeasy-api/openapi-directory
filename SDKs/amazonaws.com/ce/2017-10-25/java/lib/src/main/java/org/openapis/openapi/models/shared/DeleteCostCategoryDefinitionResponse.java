/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteCostCategoryDefinitionResponse - Success
 */
public class DeleteCostCategoryDefinitionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CostCategoryArn")
    public String costCategoryArn;

    public DeleteCostCategoryDefinitionResponse withCostCategoryArn(String costCategoryArn) {
        this.costCategoryArn = costCategoryArn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EffectiveEnd")
    public String effectiveEnd;

    public DeleteCostCategoryDefinitionResponse withEffectiveEnd(String effectiveEnd) {
        this.effectiveEnd = effectiveEnd;
        return this;
    }
    
    public DeleteCostCategoryDefinitionResponse(){}
}
