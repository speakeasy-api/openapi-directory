package openapisdk.models.operations;



public class WebBackendGetConnectionResponse {
    public String contentType;
    public WebBackendGetConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public WebBackendGetConnectionResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo;
    public WebBackendGetConnectionResponse withNotFoundKnownExceptionInfo(openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo) {
        this.notFoundKnownExceptionInfo = notFoundKnownExceptionInfo;
        return this;
    }
    public Long statusCode;
    public WebBackendGetConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebBackendConnectionRead webBackendConnectionRead;
    public WebBackendGetConnectionResponse withWebBackendConnectionRead(openapisdk.models.shared.WebBackendConnectionRead webBackendConnectionRead) {
        this.webBackendConnectionRead = webBackendConnectionRead;
        return this;
    }
}