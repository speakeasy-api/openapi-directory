/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GETPadIDUsingGET500ApplicationJSON - internal api error (code 2)
 */
public class GETPadIDUsingGET500ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;

    public GETPadIDUsingGET500ApplicationJSON withCode(Long code) {
        this.code = code;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public java.util.Map<String, Object> data;

    public GETPadIDUsingGET500ApplicationJSON withData(java.util.Map<String, Object> data) {
        this.data = data;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;

    public GETPadIDUsingGET500ApplicationJSON withMessage(String message) {
        this.message = message;
        return this;
    }
    
    public GETPadIDUsingGET500ApplicationJSON(){}
}
