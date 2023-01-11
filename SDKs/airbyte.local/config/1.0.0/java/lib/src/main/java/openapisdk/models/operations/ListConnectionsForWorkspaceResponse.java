package openapisdk.models.operations;



public class ListConnectionsForWorkspaceResponse {
    public openapisdk.models.shared.ConnectionReadList connectionReadList;
    public ListConnectionsForWorkspaceResponse withConnectionReadList(openapisdk.models.shared.ConnectionReadList connectionReadList) {
        this.connectionReadList = connectionReadList;
        return this;
    }
    public String contentType;
    public ListConnectionsForWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public ListConnectionsForWorkspaceResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo;
    public ListConnectionsForWorkspaceResponse withNotFoundKnownExceptionInfo(openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo) {
        this.notFoundKnownExceptionInfo = notFoundKnownExceptionInfo;
        return this;
    }
    public Long statusCode;
    public ListConnectionsForWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}