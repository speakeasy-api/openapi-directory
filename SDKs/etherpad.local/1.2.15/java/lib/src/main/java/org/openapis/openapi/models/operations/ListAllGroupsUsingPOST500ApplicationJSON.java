/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListAllGroupsUsingPOST500ApplicationJSON - internal api error (code 2)
 */
public class ListAllGroupsUsingPOST500ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;

    public ListAllGroupsUsingPOST500ApplicationJSON withCode(Long code) {
        this.code = code;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public java.util.Map<String, Object> data;

    public ListAllGroupsUsingPOST500ApplicationJSON withData(java.util.Map<String, Object> data) {
        this.data = data;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;

    public ListAllGroupsUsingPOST500ApplicationJSON withMessage(String message) {
        this.message = message;
        return this;
    }
    
    public ListAllGroupsUsingPOST500ApplicationJSON(){}
}
