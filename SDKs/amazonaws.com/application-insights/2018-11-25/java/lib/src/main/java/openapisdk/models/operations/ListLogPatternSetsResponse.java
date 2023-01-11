package openapisdk.models.operations;



public class ListLogPatternSetsResponse {
    public String contentType;
    public ListLogPatternSetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListLogPatternSetsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListLogPatternSetsResponse listLogPatternSetsResponse;
    public ListLogPatternSetsResponse withListLogPatternSetsResponse(openapisdk.models.shared.ListLogPatternSetsResponse listLogPatternSetsResponse) {
        this.listLogPatternSetsResponse = listLogPatternSetsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListLogPatternSetsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListLogPatternSetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListLogPatternSetsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}