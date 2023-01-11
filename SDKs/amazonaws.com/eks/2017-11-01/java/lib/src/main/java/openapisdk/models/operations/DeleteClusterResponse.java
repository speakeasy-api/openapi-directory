package openapisdk.models.operations;



public class DeleteClusterResponse {
    public Object clientException;
    public DeleteClusterResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DeleteClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteClusterResponse deleteClusterResponse;
    public DeleteClusterResponse withDeleteClusterResponse(openapisdk.models.shared.DeleteClusterResponse deleteClusterResponse) {
        this.deleteClusterResponse = deleteClusterResponse;
        return this;
    }
    public Object resourceInUseException;
    public DeleteClusterResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteClusterResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverException;
    public DeleteClusterResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteClusterResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}