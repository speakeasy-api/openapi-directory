package openapisdk.models.operations;



public class CreateConnectionResponse {
    public openapisdk.models.shared.ConnectionRead connectionRead;
    public CreateConnectionResponse withConnectionRead(openapisdk.models.shared.ConnectionRead connectionRead) {
        this.connectionRead = connectionRead;
        return this;
    }
    public String contentType;
    public CreateConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public CreateConnectionResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public Long statusCode;
    public CreateConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}