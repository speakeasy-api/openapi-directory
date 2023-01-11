package openapisdk.models.operations;



public class CreateSnapshotResponse {
    public Object clusterNotFoundFault;
    public CreateSnapshotResponse withClusterNotFoundFault(Object clusterNotFoundFault) {
        this.clusterNotFoundFault = clusterNotFoundFault;
        return this;
    }
    public String contentType;
    public CreateSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSnapshotResponse createSnapshotResponse;
    public CreateSnapshotResponse withCreateSnapshotResponse(openapisdk.models.shared.CreateSnapshotResponse createSnapshotResponse) {
        this.createSnapshotResponse = createSnapshotResponse;
        return this;
    }
    public Object invalidClusterStateFault;
    public CreateSnapshotResponse withInvalidClusterStateFault(Object invalidClusterStateFault) {
        this.invalidClusterStateFault = invalidClusterStateFault;
        return this;
    }
    public Object invalidParameterCombinationException;
    public CreateSnapshotResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterValueException;
    public CreateSnapshotResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public CreateSnapshotResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Object snapshotAlreadyExistsFault;
    public CreateSnapshotResponse withSnapshotAlreadyExistsFault(Object snapshotAlreadyExistsFault) {
        this.snapshotAlreadyExistsFault = snapshotAlreadyExistsFault;
        return this;
    }
    public Object snapshotQuotaExceededFault;
    public CreateSnapshotResponse withSnapshotQuotaExceededFault(Object snapshotQuotaExceededFault) {
        this.snapshotQuotaExceededFault = snapshotQuotaExceededFault;
        return this;
    }
    public Long statusCode;
    public CreateSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagQuotaPerResourceExceeded;
    public CreateSnapshotResponse withTagQuotaPerResourceExceeded(Object tagQuotaPerResourceExceeded) {
        this.tagQuotaPerResourceExceeded = tagQuotaPerResourceExceeded;
        return this;
    }
}