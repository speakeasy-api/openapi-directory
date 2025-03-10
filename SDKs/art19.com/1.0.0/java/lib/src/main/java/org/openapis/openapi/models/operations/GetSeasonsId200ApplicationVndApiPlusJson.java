/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetSeasonsId200ApplicationVndApiPlusJson - Success
 */
public class GetSeasonsId200ApplicationVndApiPlusJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public org.openapis.openapi.models.shared.Season data;

    public GetSeasonsId200ApplicationVndApiPlusJson withData(org.openapis.openapi.models.shared.Season data) {
        this.data = data;
        return this;
    }
    
    /**
     * Links related to the retrieved resource
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public org.openapis.openapi.models.shared.ResourceLink links;

    public GetSeasonsId200ApplicationVndApiPlusJson withLinks(org.openapis.openapi.models.shared.ResourceLink links) {
        this.links = links;
        return this;
    }
    
    public GetSeasonsId200ApplicationVndApiPlusJson(){}
}
