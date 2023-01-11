package openapisdk.models.operations;



public class ListDatastoresResponse {
    public String contentType;
    public ListDatastoresResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListDatastoresResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListDatastoresResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListDatastoresResponse listDatastoresResponse;
    public ListDatastoresResponse withListDatastoresResponse(openapisdk.models.shared.ListDatastoresResponse listDatastoresResponse) {
        this.listDatastoresResponse = listDatastoresResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public ListDatastoresResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListDatastoresResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListDatastoresResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}