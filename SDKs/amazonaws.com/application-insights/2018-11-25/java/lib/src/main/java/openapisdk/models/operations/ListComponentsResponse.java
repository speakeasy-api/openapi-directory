package openapisdk.models.operations;



public class ListComponentsResponse {
    public String contentType;
    public ListComponentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListComponentsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListComponentsResponse listComponentsResponse;
    public ListComponentsResponse withListComponentsResponse(openapisdk.models.shared.ListComponentsResponse listComponentsResponse) {
        this.listComponentsResponse = listComponentsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListComponentsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListComponentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListComponentsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}