package openapisdk.models.operations;



public class ListAssessmentFrameworksResponse {
    public Object accessDeniedException;
    public ListAssessmentFrameworksResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListAssessmentFrameworksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListAssessmentFrameworksResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListAssessmentFrameworksResponse listAssessmentFrameworksResponse;
    public ListAssessmentFrameworksResponse withListAssessmentFrameworksResponse(openapisdk.models.shared.ListAssessmentFrameworksResponse listAssessmentFrameworksResponse) {
        this.listAssessmentFrameworksResponse = listAssessmentFrameworksResponse;
        return this;
    }
    public Long statusCode;
    public ListAssessmentFrameworksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListAssessmentFrameworksResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}