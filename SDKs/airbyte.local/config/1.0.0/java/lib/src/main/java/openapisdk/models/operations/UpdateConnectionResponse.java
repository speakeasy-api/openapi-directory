package openapisdk.models.operations;



public class UpdateConnectionResponse {
    public openapisdk.models.shared.ConnectionRead connectionRead;
    public UpdateConnectionResponse withConnectionRead(openapisdk.models.shared.ConnectionRead connectionRead) {
        this.connectionRead = connectionRead;
        return this;
    }
    public String contentType;
    public UpdateConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public UpdateConnectionResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public Long statusCode;
    public UpdateConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}