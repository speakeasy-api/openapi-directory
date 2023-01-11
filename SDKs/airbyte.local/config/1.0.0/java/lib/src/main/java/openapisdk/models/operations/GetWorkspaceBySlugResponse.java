package openapisdk.models.operations;



public class GetWorkspaceBySlugResponse {
    public String contentType;
    public GetWorkspaceBySlugResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public GetWorkspaceBySlugResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo;
    public GetWorkspaceBySlugResponse withNotFoundKnownExceptionInfo(openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo) {
        this.notFoundKnownExceptionInfo = notFoundKnownExceptionInfo;
        return this;
    }
    public Long statusCode;
    public GetWorkspaceBySlugResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WorkspaceRead workspaceRead;
    public GetWorkspaceBySlugResponse withWorkspaceRead(openapisdk.models.shared.WorkspaceRead workspaceRead) {
        this.workspaceRead = workspaceRead;
        return this;
    }
}