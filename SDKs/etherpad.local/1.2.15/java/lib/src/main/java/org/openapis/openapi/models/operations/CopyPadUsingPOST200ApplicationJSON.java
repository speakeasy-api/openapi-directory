/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CopyPadUsingPOST200ApplicationJSON - ok (code 0)
 */
public class CopyPadUsingPOST200ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;

    public CopyPadUsingPOST200ApplicationJSON withCode(Long code) {
        this.code = code;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public java.util.Map<String, Object> data;

    public CopyPadUsingPOST200ApplicationJSON withData(java.util.Map<String, Object> data) {
        this.data = data;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;

    public CopyPadUsingPOST200ApplicationJSON withMessage(String message) {
        this.message = message;
        return this;
    }
    
    public CopyPadUsingPOST200ApplicationJSON(){}
}
