package openapisdk.models.operations;



public class ListDatasetContentsResponse {
    public String contentType;
    public ListDatasetContentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListDatasetContentsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListDatasetContentsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListDatasetContentsResponse listDatasetContentsResponse;
    public ListDatasetContentsResponse withListDatasetContentsResponse(openapisdk.models.shared.ListDatasetContentsResponse listDatasetContentsResponse) {
        this.listDatasetContentsResponse = listDatasetContentsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListDatasetContentsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListDatasetContentsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListDatasetContentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListDatasetContentsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}