package openapisdk.models.operations;



public class BatchDisassociateAssessmentReportEvidenceResponse {
    public Object accessDeniedException;
    public BatchDisassociateAssessmentReportEvidenceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.BatchDisassociateAssessmentReportEvidenceResponse batchDisassociateAssessmentReportEvidenceResponse;
    public BatchDisassociateAssessmentReportEvidenceResponse withBatchDisassociateAssessmentReportEvidenceResponse(openapisdk.models.shared.BatchDisassociateAssessmentReportEvidenceResponse batchDisassociateAssessmentReportEvidenceResponse) {
        this.batchDisassociateAssessmentReportEvidenceResponse = batchDisassociateAssessmentReportEvidenceResponse;
        return this;
    }
    public String contentType;
    public BatchDisassociateAssessmentReportEvidenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchDisassociateAssessmentReportEvidenceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public BatchDisassociateAssessmentReportEvidenceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public BatchDisassociateAssessmentReportEvidenceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public BatchDisassociateAssessmentReportEvidenceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}