package openapisdk.models.operations;



public class DeleteClusterResponse {
    public Object clientException;
    public DeleteClusterResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public Object clusterContainsContainerInstancesException;
    public DeleteClusterResponse withClusterContainsContainerInstancesException(Object clusterContainsContainerInstancesException) {
        this.clusterContainsContainerInstancesException = clusterContainsContainerInstancesException;
        return this;
    }
    public Object clusterContainsServicesException;
    public DeleteClusterResponse withClusterContainsServicesException(Object clusterContainsServicesException) {
        this.clusterContainsServicesException = clusterContainsServicesException;
        return this;
    }
    public Object clusterContainsTasksException;
    public DeleteClusterResponse withClusterContainsTasksException(Object clusterContainsTasksException) {
        this.clusterContainsTasksException = clusterContainsTasksException;
        return this;
    }
    public Object clusterNotFoundException;
    public DeleteClusterResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
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
    public Object invalidParameterException;
    public DeleteClusterResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public DeleteClusterResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DeleteClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateInProgressException;
    public DeleteClusterResponse withUpdateInProgressException(Object updateInProgressException) {
        this.updateInProgressException = updateInProgressException;
        return this;
    }
}