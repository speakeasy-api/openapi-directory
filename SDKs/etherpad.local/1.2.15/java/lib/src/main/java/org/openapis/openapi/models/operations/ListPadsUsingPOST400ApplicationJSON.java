/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListPadsUsingPOST400ApplicationJSON - generic api error (code 1)
 */
public class ListPadsUsingPOST400ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;

    public ListPadsUsingPOST400ApplicationJSON withCode(Long code) {
        this.code = code;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public java.util.Map<String, Object> data;

    public ListPadsUsingPOST400ApplicationJSON withData(java.util.Map<String, Object> data) {
        this.data = data;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;

    public ListPadsUsingPOST400ApplicationJSON withMessage(String message) {
        this.message = message;
        return this;
    }
    
    public ListPadsUsingPOST400ApplicationJSON(){}
}
