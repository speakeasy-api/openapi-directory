package openapisdk.models.operations;



public class ListAssessmentReportsResponse {
    public Object accessDeniedException;
    public ListAssessmentReportsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListAssessmentReportsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListAssessmentReportsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListAssessmentReportsResponse listAssessmentReportsResponse;
    public ListAssessmentReportsResponse withListAssessmentReportsResponse(openapisdk.models.shared.ListAssessmentReportsResponse listAssessmentReportsResponse) {
        this.listAssessmentReportsResponse = listAssessmentReportsResponse;
        return this;
    }
    public Long statusCode;
    public ListAssessmentReportsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListAssessmentReportsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}