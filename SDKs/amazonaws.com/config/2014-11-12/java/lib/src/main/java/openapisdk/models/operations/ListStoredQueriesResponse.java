package openapisdk.models.operations;



public class ListStoredQueriesResponse {
    public String contentType;
    public ListStoredQueriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListStoredQueriesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListStoredQueriesResponse listStoredQueriesResponse;
    public ListStoredQueriesResponse withListStoredQueriesResponse(openapisdk.models.shared.ListStoredQueriesResponse listStoredQueriesResponse) {
        this.listStoredQueriesResponse = listStoredQueriesResponse;
        return this;
    }
    public Long statusCode;
    public ListStoredQueriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListStoredQueriesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}