package openapisdk.models.operations;



public class CopySnapshotResponse {
    public String contentType;
    public CopySnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CopySnapshotResponse copySnapshotResponse;
    public CopySnapshotResponse withCopySnapshotResponse(openapisdk.models.shared.CopySnapshotResponse copySnapshotResponse) {
        this.copySnapshotResponse = copySnapshotResponse;
        return this;
    }
    public Object invalidParameterCombinationException;
    public CopySnapshotResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterValueException;
    public CopySnapshotResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object invalidSnapshotStateFault;
    public CopySnapshotResponse withInvalidSnapshotStateFault(Object invalidSnapshotStateFault) {
        this.invalidSnapshotStateFault = invalidSnapshotStateFault;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public CopySnapshotResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Object snapshotAlreadyExistsFault;
    public CopySnapshotResponse withSnapshotAlreadyExistsFault(Object snapshotAlreadyExistsFault) {
        this.snapshotAlreadyExistsFault = snapshotAlreadyExistsFault;
        return this;
    }
    public Object snapshotNotFoundFault;
    public CopySnapshotResponse withSnapshotNotFoundFault(Object snapshotNotFoundFault) {
        this.snapshotNotFoundFault = snapshotNotFoundFault;
        return this;
    }
    public Object snapshotQuotaExceededFault;
    public CopySnapshotResponse withSnapshotQuotaExceededFault(Object snapshotQuotaExceededFault) {
        this.snapshotQuotaExceededFault = snapshotQuotaExceededFault;
        return this;
    }
    public Long statusCode;
    public CopySnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagQuotaPerResourceExceeded;
    public CopySnapshotResponse withTagQuotaPerResourceExceeded(Object tagQuotaPerResourceExceeded) {
        this.tagQuotaPerResourceExceeded = tagQuotaPerResourceExceeded;
        return this;
    }
}