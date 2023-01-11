package openapisdk.models.operations;



public class ListProblemsResponse {
    public String contentType;
    public ListProblemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListProblemsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListProblemsResponse listProblemsResponse;
    public ListProblemsResponse withListProblemsResponse(openapisdk.models.shared.ListProblemsResponse listProblemsResponse) {
        this.listProblemsResponse = listProblemsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListProblemsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListProblemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListProblemsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}