package openapisdk.models.operations;



public class BatchAssociateAssessmentReportEvidenceResponse {
    public Object accessDeniedException;
    public BatchAssociateAssessmentReportEvidenceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.BatchAssociateAssessmentReportEvidenceResponse batchAssociateAssessmentReportEvidenceResponse;
    public BatchAssociateAssessmentReportEvidenceResponse withBatchAssociateAssessmentReportEvidenceResponse(openapisdk.models.shared.BatchAssociateAssessmentReportEvidenceResponse batchAssociateAssessmentReportEvidenceResponse) {
        this.batchAssociateAssessmentReportEvidenceResponse = batchAssociateAssessmentReportEvidenceResponse;
        return this;
    }
    public String contentType;
    public BatchAssociateAssessmentReportEvidenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchAssociateAssessmentReportEvidenceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public BatchAssociateAssessmentReportEvidenceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public BatchAssociateAssessmentReportEvidenceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public BatchAssociateAssessmentReportEvidenceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}