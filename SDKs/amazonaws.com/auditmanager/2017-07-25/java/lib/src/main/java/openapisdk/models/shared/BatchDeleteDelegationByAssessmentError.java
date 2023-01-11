package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchDeleteDelegationByAssessmentError
 *  An error entity for the <code>BatchDeleteDelegationByAssessment</code> API. This is used to provide more meaningful errors than a simple string message. 
**/
public class BatchDeleteDelegationByAssessmentError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delegationId")
    public String delegationId;
    public BatchDeleteDelegationByAssessmentError withDelegationId(String delegationId) {
        this.delegationId = delegationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public String errorCode;
    public BatchDeleteDelegationByAssessmentError withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public BatchDeleteDelegationByAssessmentError withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
}