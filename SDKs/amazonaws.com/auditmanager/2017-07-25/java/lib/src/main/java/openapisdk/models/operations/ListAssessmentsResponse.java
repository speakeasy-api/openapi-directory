package openapisdk.models.operations;



public class ListAssessmentsResponse {
    public Object accessDeniedException;
    public ListAssessmentsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListAssessmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListAssessmentsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListAssessmentsResponse listAssessmentsResponse;
    public ListAssessmentsResponse withListAssessmentsResponse(openapisdk.models.shared.ListAssessmentsResponse listAssessmentsResponse) {
        this.listAssessmentsResponse = listAssessmentsResponse;
        return this;
    }
    public Long statusCode;
    public ListAssessmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListAssessmentsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}