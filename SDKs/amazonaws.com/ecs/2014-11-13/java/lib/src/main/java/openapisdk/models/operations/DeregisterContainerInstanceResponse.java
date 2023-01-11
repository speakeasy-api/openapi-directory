package openapisdk.models.operations;



public class DeregisterContainerInstanceResponse {
    public Object clientException;
    public DeregisterContainerInstanceResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public Object clusterNotFoundException;
    public DeregisterContainerInstanceResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public DeregisterContainerInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeregisterContainerInstanceResponse deregisterContainerInstanceResponse;
    public DeregisterContainerInstanceResponse withDeregisterContainerInstanceResponse(openapisdk.models.shared.DeregisterContainerInstanceResponse deregisterContainerInstanceResponse) {
        this.deregisterContainerInstanceResponse = deregisterContainerInstanceResponse;
        return this;
    }
    public Object invalidParameterException;
    public DeregisterContainerInstanceResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public DeregisterContainerInstanceResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DeregisterContainerInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}