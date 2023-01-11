package openapisdk.models.operations;



public class UpdateOperationResponse {
    public String contentType;
    public UpdateOperationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public UpdateOperationResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.OperationRead operationRead;
    public UpdateOperationResponse withOperationRead(openapisdk.models.shared.OperationRead operationRead) {
        this.operationRead = operationRead;
        return this;
    }
    public Long statusCode;
    public UpdateOperationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}