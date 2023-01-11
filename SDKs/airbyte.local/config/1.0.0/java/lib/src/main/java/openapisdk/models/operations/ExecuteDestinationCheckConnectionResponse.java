package openapisdk.models.operations;



public class ExecuteDestinationCheckConnectionResponse {
    public openapisdk.models.shared.CheckConnectionRead checkConnectionRead;
    public ExecuteDestinationCheckConnectionResponse withCheckConnectionRead(openapisdk.models.shared.CheckConnectionRead checkConnectionRead) {
        this.checkConnectionRead = checkConnectionRead;
        return this;
    }
    public String contentType;
    public ExecuteDestinationCheckConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public ExecuteDestinationCheckConnectionResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public Long statusCode;
    public ExecuteDestinationCheckConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}