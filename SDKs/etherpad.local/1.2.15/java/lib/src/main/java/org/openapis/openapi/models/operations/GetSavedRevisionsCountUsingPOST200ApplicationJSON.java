/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetSavedRevisionsCountUsingPOST200ApplicationJSON - ok (code 0)
 */
public class GetSavedRevisionsCountUsingPOST200ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;

    public GetSavedRevisionsCountUsingPOST200ApplicationJSON withCode(Long code) {
        this.code = code;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public java.util.Map<String, Object> data;

    public GetSavedRevisionsCountUsingPOST200ApplicationJSON withData(java.util.Map<String, Object> data) {
        this.data = data;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;

    public GetSavedRevisionsCountUsingPOST200ApplicationJSON withMessage(String message) {
        this.message = message;
        return this;
    }
    
    public GetSavedRevisionsCountUsingPOST200ApplicationJSON(){}
}
