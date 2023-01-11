package openapisdk.models.operations;



public class PutClusterCapacityProvidersResponse {
    public Object clientException;
    public PutClusterCapacityProvidersResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public Object clusterNotFoundException;
    public PutClusterCapacityProvidersResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public PutClusterCapacityProvidersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public PutClusterCapacityProvidersResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.PutClusterCapacityProvidersResponse putClusterCapacityProvidersResponse;
    public PutClusterCapacityProvidersResponse withPutClusterCapacityProvidersResponse(openapisdk.models.shared.PutClusterCapacityProvidersResponse putClusterCapacityProvidersResponse) {
        this.putClusterCapacityProvidersResponse = putClusterCapacityProvidersResponse;
        return this;
    }
    public Object resourceInUseException;
    public PutClusterCapacityProvidersResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object serverException;
    public PutClusterCapacityProvidersResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public PutClusterCapacityProvidersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateInProgressException;
    public PutClusterCapacityProvidersResponse withUpdateInProgressException(Object updateInProgressException) {
        this.updateInProgressException = updateInProgressException;
        return this;
    }
}