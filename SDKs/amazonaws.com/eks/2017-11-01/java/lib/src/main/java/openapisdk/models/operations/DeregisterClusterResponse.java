package openapisdk.models.operations;



public class DeregisterClusterResponse {
    public Object clientException;
    public DeregisterClusterResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DeregisterClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeregisterClusterResponse deregisterClusterResponse;
    public DeregisterClusterResponse withDeregisterClusterResponse(openapisdk.models.shared.DeregisterClusterResponse deregisterClusterResponse) {
        this.deregisterClusterResponse = deregisterClusterResponse;
        return this;
    }
    public Object resourceInUseException;
    public DeregisterClusterResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeregisterClusterResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverException;
    public DeregisterClusterResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeregisterClusterResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeregisterClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}