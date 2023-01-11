package openapisdk.models.operations;



public class ListInputsResponse {
    public String contentType;
    public ListInputsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListInputsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListInputsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListInputsResponse listInputsResponse;
    public ListInputsResponse withListInputsResponse(openapisdk.models.shared.ListInputsResponse listInputsResponse) {
        this.listInputsResponse = listInputsResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public ListInputsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListInputsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListInputsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}