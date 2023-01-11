package openapisdk.models.operations;



public class ListFleetsResponse {
    public String contentType;
    public ListFleetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListFleetsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public ListFleetsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListFleetsResponse listFleetsResponse;
    public ListFleetsResponse withListFleetsResponse(openapisdk.models.shared.ListFleetsResponse listFleetsResponse) {
        this.listFleetsResponse = listFleetsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListFleetsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListFleetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListFleetsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}