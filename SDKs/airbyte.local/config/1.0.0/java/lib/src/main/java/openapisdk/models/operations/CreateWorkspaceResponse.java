package openapisdk.models.operations;



public class CreateWorkspaceResponse {
    public String contentType;
    public CreateWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public CreateWorkspaceResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public Long statusCode;
    public CreateWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WorkspaceRead workspaceRead;
    public CreateWorkspaceResponse withWorkspaceRead(openapisdk.models.shared.WorkspaceRead workspaceRead) {
        this.workspaceRead = workspaceRead;
        return this;
    }
}