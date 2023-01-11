package openapisdk.models.operations;



public class WebBackendListConnectionsForWorkspaceResponse {
    public String contentType;
    public WebBackendListConnectionsForWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public WebBackendListConnectionsForWorkspaceResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo;
    public WebBackendListConnectionsForWorkspaceResponse withNotFoundKnownExceptionInfo(openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo) {
        this.notFoundKnownExceptionInfo = notFoundKnownExceptionInfo;
        return this;
    }
    public Long statusCode;
    public WebBackendListConnectionsForWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebBackendConnectionReadList webBackendConnectionReadList;
    public WebBackendListConnectionsForWorkspaceResponse withWebBackendConnectionReadList(openapisdk.models.shared.WebBackendConnectionReadList webBackendConnectionReadList) {
        this.webBackendConnectionReadList = webBackendConnectionReadList;
        return this;
    }
}