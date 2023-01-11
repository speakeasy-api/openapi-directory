package openapisdk.models.operations;



public class DescribeWorkspaceSnapshotsResponse {
    public Object accessDeniedException;
    public DescribeWorkspaceSnapshotsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeWorkspaceSnapshotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeWorkspaceSnapshotsResult describeWorkspaceSnapshotsResult;
    public DescribeWorkspaceSnapshotsResponse withDescribeWorkspaceSnapshotsResult(openapisdk.models.shared.DescribeWorkspaceSnapshotsResult describeWorkspaceSnapshotsResult) {
        this.describeWorkspaceSnapshotsResult = describeWorkspaceSnapshotsResult;
        return this;
    }
    public Object invalidParameterValuesException;
    public DescribeWorkspaceSnapshotsResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeWorkspaceSnapshotsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeWorkspaceSnapshotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}