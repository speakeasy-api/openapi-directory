package openapisdk.models.operations;



public class WebBackendUpdateConnectionResponse {
    public String contentType;
    public WebBackendUpdateConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public WebBackendUpdateConnectionResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public Long statusCode;
    public WebBackendUpdateConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebBackendConnectionRead webBackendConnectionRead;
    public WebBackendUpdateConnectionResponse withWebBackendConnectionRead(openapisdk.models.shared.WebBackendConnectionRead webBackendConnectionRead) {
        this.webBackendConnectionRead = webBackendConnectionRead;
        return this;
    }
}