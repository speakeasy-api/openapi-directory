package openapisdk.models.operations;



public class CreateOperationResponse {
    public String contentType;
    public CreateOperationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public CreateOperationResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.OperationRead operationRead;
    public CreateOperationResponse withOperationRead(openapisdk.models.shared.OperationRead operationRead) {
        this.operationRead = operationRead;
        return this;
    }
    public Long statusCode;
    public CreateOperationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}