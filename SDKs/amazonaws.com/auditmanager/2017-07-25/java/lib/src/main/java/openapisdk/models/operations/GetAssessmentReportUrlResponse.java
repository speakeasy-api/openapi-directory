package openapisdk.models.operations;



public class GetAssessmentReportUrlResponse {
    public Object accessDeniedException;
    public GetAssessmentReportUrlResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetAssessmentReportUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAssessmentReportUrlResponse getAssessmentReportUrlResponse;
    public GetAssessmentReportUrlResponse withGetAssessmentReportUrlResponse(openapisdk.models.shared.GetAssessmentReportUrlResponse getAssessmentReportUrlResponse) {
        this.getAssessmentReportUrlResponse = getAssessmentReportUrlResponse;
        return this;
    }
    public Object internalServerException;
    public GetAssessmentReportUrlResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetAssessmentReportUrlResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetAssessmentReportUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetAssessmentReportUrlResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}