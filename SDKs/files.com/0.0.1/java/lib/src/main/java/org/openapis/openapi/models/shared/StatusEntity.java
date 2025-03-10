/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StatusEntity - Test webhook.
 */
public class StatusEntity {
    /**
     * Required Clickwrap body
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickwrap_body")
    public String clickwrapBody;

    public StatusEntity withClickwrapBody(String clickwrapBody) {
        this.clickwrapBody = clickwrapBody;
        return this;
    }
    
    /**
     * Required Clickwrap id
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickwrap_id")
    public Integer clickwrapId;

    public StatusEntity withClickwrapId(Integer clickwrapId) {
        this.clickwrapId = clickwrapId;
        return this;
    }
    
    /**
     * Status HTTP code
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Integer code;

    public StatusEntity withCode(Integer code) {
        this.code = code;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public AutoEntity data;

    public StatusEntity withData(AutoEntity data) {
        this.data = data;
        return this;
    }
    
    /**
     * A list of api errors
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public ErrorsEntity[] errors;

    public StatusEntity withErrors(ErrorsEntity[] errors) {
        this.errors = errors;
        return this;
    }
    
    /**
     * Error message
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;

    public StatusEntity withMessage(String message) {
        this.message = message;
        return this;
    }
    
    /**
     * Status message
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;

    public StatusEntity withStatus(String status) {
        this.status = status;
        return this;
    }
    
    public StatusEntity(){}
}
