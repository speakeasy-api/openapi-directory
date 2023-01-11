package openapisdk.models.operations;



public class DescribeSnapshotsResponse {
    public Object clientException;
    public DescribeSnapshotsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DescribeSnapshotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSnapshotsResult describeSnapshotsResult;
    public DescribeSnapshotsResponse withDescribeSnapshotsResult(openapisdk.models.shared.DescribeSnapshotsResult describeSnapshotsResult) {
        this.describeSnapshotsResult = describeSnapshotsResult;
        return this;
    }
    public Object entityDoesNotExistException;
    public DescribeSnapshotsResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeSnapshotsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeSnapshotsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public DescribeSnapshotsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DescribeSnapshotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}