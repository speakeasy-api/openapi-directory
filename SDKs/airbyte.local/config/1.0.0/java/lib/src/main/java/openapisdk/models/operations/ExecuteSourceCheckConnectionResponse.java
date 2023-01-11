package openapisdk.models.operations;



public class ExecuteSourceCheckConnectionResponse {
    public openapisdk.models.shared.CheckConnectionRead checkConnectionRead;
    public ExecuteSourceCheckConnectionResponse withCheckConnectionRead(openapisdk.models.shared.CheckConnectionRead checkConnectionRead) {
        this.checkConnectionRead = checkConnectionRead;
        return this;
    }
    public String contentType;
    public ExecuteSourceCheckConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public ExecuteSourceCheckConnectionResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public Long statusCode;
    public ExecuteSourceCheckConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}