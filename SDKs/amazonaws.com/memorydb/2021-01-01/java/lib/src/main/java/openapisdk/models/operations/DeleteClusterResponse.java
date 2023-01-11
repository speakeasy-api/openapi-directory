package openapisdk.models.operations;



public class DeleteClusterResponse {
    public Object clusterNotFoundFault;
    public DeleteClusterResponse withClusterNotFoundFault(Object clusterNotFoundFault) {
        this.clusterNotFoundFault = clusterNotFoundFault;
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
    public Object invalidClusterStateFault;
    public DeleteClusterResponse withInvalidClusterStateFault(Object invalidClusterStateFault) {
        this.invalidClusterStateFault = invalidClusterStateFault;
        return this;
    }
    public Object invalidParameterCombinationException;
    public DeleteClusterResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterValueException;
    public DeleteClusterResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public DeleteClusterResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Object snapshotAlreadyExistsFault;
    public DeleteClusterResponse withSnapshotAlreadyExistsFault(Object snapshotAlreadyExistsFault) {
        this.snapshotAlreadyExistsFault = snapshotAlreadyExistsFault;
        return this;
    }
    public Long statusCode;
    public DeleteClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}