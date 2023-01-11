package openapisdk.models.operations;



public class ListDatasetsResponse {
    public String contentType;
    public ListDatasetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListDatasetsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListDatasetsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListDatasetsResponse listDatasetsResponse;
    public ListDatasetsResponse withListDatasetsResponse(openapisdk.models.shared.ListDatasetsResponse listDatasetsResponse) {
        this.listDatasetsResponse = listDatasetsResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public ListDatasetsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListDatasetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListDatasetsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}