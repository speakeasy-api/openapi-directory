package openapisdk.models.operations;



public class UpdateContainerInstancesStateResponse {
    public Object clientException;
    public UpdateContainerInstancesStateResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public Object clusterNotFoundException;
    public UpdateContainerInstancesStateResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public UpdateContainerInstancesStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public UpdateContainerInstancesStateResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public UpdateContainerInstancesStateResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public UpdateContainerInstancesStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateContainerInstancesStateResponse updateContainerInstancesStateResponse;
    public UpdateContainerInstancesStateResponse withUpdateContainerInstancesStateResponse(openapisdk.models.shared.UpdateContainerInstancesStateResponse updateContainerInstancesStateResponse) {
        this.updateContainerInstancesStateResponse = updateContainerInstancesStateResponse;
        return this;
    }
}