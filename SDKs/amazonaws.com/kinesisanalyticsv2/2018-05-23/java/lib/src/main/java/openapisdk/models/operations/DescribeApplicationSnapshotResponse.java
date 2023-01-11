package openapisdk.models.operations;



public class DescribeApplicationSnapshotResponse {
    public String contentType;
    public DescribeApplicationSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeApplicationSnapshotResponse describeApplicationSnapshotResponse;
    public DescribeApplicationSnapshotResponse withDescribeApplicationSnapshotResponse(openapisdk.models.shared.DescribeApplicationSnapshotResponse describeApplicationSnapshotResponse) {
        this.describeApplicationSnapshotResponse = describeApplicationSnapshotResponse;
        return this;
    }
    public Object invalidArgumentException;
    public DescribeApplicationSnapshotResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeApplicationSnapshotResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeApplicationSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public DescribeApplicationSnapshotResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}