package openapisdk.models.operations;



public class ListAddonsResponse {
    public Object clientException;
    public ListAddonsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ListAddonsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public ListAddonsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public ListAddonsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListAddonsResponse listAddonsResponse;
    public ListAddonsResponse withListAddonsResponse(openapisdk.models.shared.ListAddonsResponse listAddonsResponse) {
        this.listAddonsResponse = listAddonsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAddonsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverException;
    public ListAddonsResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public ListAddonsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}