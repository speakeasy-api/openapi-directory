package openapisdk.models.operations;



public class ListEventTypesResponse {
    public String contentType;
    public ListEventTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListEventTypesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListEventTypesResult listEventTypesResult;
    public ListEventTypesResponse withListEventTypesResult(openapisdk.models.shared.ListEventTypesResult listEventTypesResult) {
        this.listEventTypesResult = listEventTypesResult;
        return this;
    }
    public Long statusCode;
    public ListEventTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListEventTypesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}