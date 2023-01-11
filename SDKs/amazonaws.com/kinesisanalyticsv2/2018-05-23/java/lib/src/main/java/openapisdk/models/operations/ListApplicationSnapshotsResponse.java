package openapisdk.models.operations;



public class ListApplicationSnapshotsResponse {
    public String contentType;
    public ListApplicationSnapshotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public ListApplicationSnapshotsResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public openapisdk.models.shared.ListApplicationSnapshotsResponse listApplicationSnapshotsResponse;
    public ListApplicationSnapshotsResponse withListApplicationSnapshotsResponse(openapisdk.models.shared.ListApplicationSnapshotsResponse listApplicationSnapshotsResponse) {
        this.listApplicationSnapshotsResponse = listApplicationSnapshotsResponse;
        return this;
    }
    public Long statusCode;
    public ListApplicationSnapshotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public ListApplicationSnapshotsResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}