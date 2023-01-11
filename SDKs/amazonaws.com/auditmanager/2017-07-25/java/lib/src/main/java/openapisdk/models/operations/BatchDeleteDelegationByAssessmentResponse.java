package openapisdk.models.operations;



public class BatchDeleteDelegationByAssessmentResponse {
    public Object accessDeniedException;
    public BatchDeleteDelegationByAssessmentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.BatchDeleteDelegationByAssessmentResponse batchDeleteDelegationByAssessmentResponse;
    public BatchDeleteDelegationByAssessmentResponse withBatchDeleteDelegationByAssessmentResponse(openapisdk.models.shared.BatchDeleteDelegationByAssessmentResponse batchDeleteDelegationByAssessmentResponse) {
        this.batchDeleteDelegationByAssessmentResponse = batchDeleteDelegationByAssessmentResponse;
        return this;
    }
    public String contentType;
    public BatchDeleteDelegationByAssessmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchDeleteDelegationByAssessmentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public BatchDeleteDelegationByAssessmentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public BatchDeleteDelegationByAssessmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public BatchDeleteDelegationByAssessmentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}