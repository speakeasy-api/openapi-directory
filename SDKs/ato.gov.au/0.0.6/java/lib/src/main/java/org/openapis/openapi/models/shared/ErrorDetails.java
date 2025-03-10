/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ErrorDetails {
    /**
     * The error code.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;

    public ErrorDetails withCode(String code) {
        this.code = code;
        return this;
    }
    
    /**
     * The error message.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;

    public ErrorDetails withMessage(String message) {
        this.message = message;
        return this;
    }
    
    /**
     * The error target.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public String target;

    public ErrorDetails withTarget(String target) {
        this.target = target;
        return this;
    }
    
    public ErrorDetails(){}
}
