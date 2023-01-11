package openapisdk.models.operations;



public class BatchImportEvidenceToAssessmentControlResponse {
    public Object accessDeniedException;
    public BatchImportEvidenceToAssessmentControlResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.BatchImportEvidenceToAssessmentControlResponse batchImportEvidenceToAssessmentControlResponse;
    public BatchImportEvidenceToAssessmentControlResponse withBatchImportEvidenceToAssessmentControlResponse(openapisdk.models.shared.BatchImportEvidenceToAssessmentControlResponse batchImportEvidenceToAssessmentControlResponse) {
        this.batchImportEvidenceToAssessmentControlResponse = batchImportEvidenceToAssessmentControlResponse;
        return this;
    }
    public String contentType;
    public BatchImportEvidenceToAssessmentControlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchImportEvidenceToAssessmentControlResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public BatchImportEvidenceToAssessmentControlResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public BatchImportEvidenceToAssessmentControlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public BatchImportEvidenceToAssessmentControlResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}