/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetRegionsResult - Success
 */
public class GetRegionsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regions")
    public Region[] regions;

    public GetRegionsResult withRegions(Region[] regions) {
        this.regions = regions;
        return this;
    }
    
    public GetRegionsResult(){}
}
