package openapisdk.models.operations;



public class DescribeSnapshotsResponse {
    public String contentType;
    public DescribeSnapshotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSnapshotsResponse describeSnapshotsResponse;
    public DescribeSnapshotsResponse withDescribeSnapshotsResponse(openapisdk.models.shared.DescribeSnapshotsResponse describeSnapshotsResponse) {
        this.describeSnapshotsResponse = describeSnapshotsResponse;
        return this;
    }
    public Object invalidParameterCombinationException;
    public DescribeSnapshotsResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeSnapshotsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public DescribeSnapshotsResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Object snapshotNotFoundFault;
    public DescribeSnapshotsResponse withSnapshotNotFoundFault(Object snapshotNotFoundFault) {
        this.snapshotNotFoundFault = snapshotNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DescribeSnapshotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}