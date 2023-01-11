package openapisdk.models.operations;



public class UpdateWorkspaceResponse {
    public String contentType;
    public UpdateWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public UpdateWorkspaceResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo;
    public UpdateWorkspaceResponse withNotFoundKnownExceptionInfo(openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo) {
        this.notFoundKnownExceptionInfo = notFoundKnownExceptionInfo;
        return this;
    }
    public Long statusCode;
    public UpdateWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WorkspaceRead workspaceRead;
    public UpdateWorkspaceResponse withWorkspaceRead(openapisdk.models.shared.WorkspaceRead workspaceRead) {
        this.workspaceRead = workspaceRead;
        return this;
    }
}