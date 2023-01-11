package openapisdk.models.operations;



public class WebBackendCreateConnectionResponse {
    public String contentType;
    public WebBackendCreateConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public WebBackendCreateConnectionResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public Long statusCode;
    public WebBackendCreateConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebBackendConnectionRead webBackendConnectionRead;
    public WebBackendCreateConnectionResponse withWebBackendConnectionRead(openapisdk.models.shared.WebBackendConnectionRead webBackendConnectionRead) {
        this.webBackendConnectionRead = webBackendConnectionRead;
        return this;
    }
}