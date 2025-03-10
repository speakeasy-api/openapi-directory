/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateFaqResponse - Success
 */
public class CreateFaqResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;

    public CreateFaqResponse withId(String id) {
        this.id = id;
        return this;
    }
    
    public CreateFaqResponse(){}
}
