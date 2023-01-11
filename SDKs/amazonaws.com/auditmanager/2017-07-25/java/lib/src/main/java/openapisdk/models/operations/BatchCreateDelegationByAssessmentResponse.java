package openapisdk.models.operations;



public class BatchCreateDelegationByAssessmentResponse {
    public Object accessDeniedException;
    public BatchCreateDelegationByAssessmentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.BatchCreateDelegationByAssessmentResponse batchCreateDelegationByAssessmentResponse;
    public BatchCreateDelegationByAssessmentResponse withBatchCreateDelegationByAssessmentResponse(openapisdk.models.shared.BatchCreateDelegationByAssessmentResponse batchCreateDelegationByAssessmentResponse) {
        this.batchCreateDelegationByAssessmentResponse = batchCreateDelegationByAssessmentResponse;
        return this;
    }
    public String contentType;
    public BatchCreateDelegationByAssessmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchCreateDelegationByAssessmentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public BatchCreateDelegationByAssessmentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public BatchCreateDelegationByAssessmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public BatchCreateDelegationByAssessmentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}