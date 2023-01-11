package openapisdk.models.operations;



public class CheckOperationResponse {
    public openapisdk.models.shared.CheckOperationRead checkOperationRead;
    public CheckOperationResponse withCheckOperationRead(openapisdk.models.shared.CheckOperationRead checkOperationRead) {
        this.checkOperationRead = checkOperationRead;
        return this;
    }
    public String contentType;
    public CheckOperationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public CheckOperationResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public Long statusCode;
    public CheckOperationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}