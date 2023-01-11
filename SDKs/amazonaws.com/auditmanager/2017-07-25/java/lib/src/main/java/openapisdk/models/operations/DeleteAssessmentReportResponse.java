package openapisdk.models.operations;



public class DeleteAssessmentReportResponse {
    public Object accessDeniedException;
    public DeleteAssessmentReportResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteAssessmentReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteAssessmentReportResponse;
    public DeleteAssessmentReportResponse withDeleteAssessmentReportResponse(java.util.Map<String, Object> deleteAssessmentReportResponse) {
        this.deleteAssessmentReportResponse = deleteAssessmentReportResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteAssessmentReportResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteAssessmentReportResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteAssessmentReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteAssessmentReportResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}