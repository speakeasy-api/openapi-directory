package openapisdk.models.operations;



public class GetOperationResponse {
    public String contentType;
    public GetOperationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public GetOperationResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo;
    public GetOperationResponse withNotFoundKnownExceptionInfo(openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo) {
        this.notFoundKnownExceptionInfo = notFoundKnownExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.OperationRead operationRead;
    public GetOperationResponse withOperationRead(openapisdk.models.shared.OperationRead operationRead) {
        this.operationRead = operationRead;
        return this;
    }
    public Long statusCode;
    public GetOperationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}