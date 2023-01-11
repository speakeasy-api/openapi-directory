package openapisdk.models.operations;



public class DeleteSnapshotResponse {
    public String contentType;
    public DeleteSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteSnapshotResponse deleteSnapshotResponse;
    public DeleteSnapshotResponse withDeleteSnapshotResponse(openapisdk.models.shared.DeleteSnapshotResponse deleteSnapshotResponse) {
        this.deleteSnapshotResponse = deleteSnapshotResponse;
        return this;
    }
    public Object invalidParameterCombinationException;
    public DeleteSnapshotResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterValueException;
    public DeleteSnapshotResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object invalidSnapshotStateFault;
    public DeleteSnapshotResponse withInvalidSnapshotStateFault(Object invalidSnapshotStateFault) {
        this.invalidSnapshotStateFault = invalidSnapshotStateFault;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public DeleteSnapshotResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Object snapshotNotFoundFault;
    public DeleteSnapshotResponse withSnapshotNotFoundFault(Object snapshotNotFoundFault) {
        this.snapshotNotFoundFault = snapshotNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DeleteSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}