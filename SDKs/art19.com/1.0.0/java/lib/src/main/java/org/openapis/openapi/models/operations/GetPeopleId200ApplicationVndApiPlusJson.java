/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetPeopleId200ApplicationVndApiPlusJson - Success
 */
public class GetPeopleId200ApplicationVndApiPlusJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public org.openapis.openapi.models.shared.Person data;

    public GetPeopleId200ApplicationVndApiPlusJson withData(org.openapis.openapi.models.shared.Person data) {
        this.data = data;
        return this;
    }
    
    /**
     * Links related to the retrieved resource
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public org.openapis.openapi.models.shared.ResourceLink links;

    public GetPeopleId200ApplicationVndApiPlusJson withLinks(org.openapis.openapi.models.shared.ResourceLink links) {
        this.links = links;
        return this;
    }
    
    public GetPeopleId200ApplicationVndApiPlusJson(){}
}
