/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchCreateDelegationByAssessmentError -  An error entity for the &lt;code&gt;BatchCreateDelegationByAssessment&lt;/code&gt; API. This is used to provide more meaningful errors than a simple string message. 
 */
public class BatchCreateDelegationByAssessmentError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createDelegationRequest")
    public CreateDelegationRequest createDelegationRequest;

    public BatchCreateDelegationByAssessmentError withCreateDelegationRequest(CreateDelegationRequest createDelegationRequest) {
        this.createDelegationRequest = createDelegationRequest;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public String errorCode;

    public BatchCreateDelegationByAssessmentError withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;

    public BatchCreateDelegationByAssessmentError withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    
    public BatchCreateDelegationByAssessmentError(){}
}
