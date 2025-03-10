/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ErrorMessage - Forbidden
 */
public class ErrorMessage {
    /**
     * A machine friendly error code, used by the dev team to identify the error.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;

    public ErrorMessage withCode(Long code) {
        this.code = code;
        return this;
    }
    
    /**
     * A human friendly message explaining the error.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;

    public ErrorMessage withMessage(String message) {
        this.message = message;
        return this;
    }
    
    public ErrorMessage(){}
}
