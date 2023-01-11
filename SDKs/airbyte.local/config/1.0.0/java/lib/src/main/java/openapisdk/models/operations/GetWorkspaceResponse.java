package openapisdk.models.operations;



public class GetWorkspaceResponse {
    public String contentType;
    public GetWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public GetWorkspaceResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo;
    public GetWorkspaceResponse withNotFoundKnownExceptionInfo(openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo) {
        this.notFoundKnownExceptionInfo = notFoundKnownExceptionInfo;
        return this;
    }
    public Long statusCode;
    public GetWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WorkspaceRead workspaceRead;
    public GetWorkspaceResponse withWorkspaceRead(openapisdk.models.shared.WorkspaceRead workspaceRead) {
        this.workspaceRead = workspaceRead;
        return this;
    }
}