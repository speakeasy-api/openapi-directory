package openapisdk.models.operations;



public class WebBackendRecreateSourceResponse {
    public String contentType;
    public WebBackendRecreateSourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public WebBackendRecreateSourceResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.SourceRead sourceRead;
    public WebBackendRecreateSourceResponse withSourceRead(openapisdk.models.shared.SourceRead sourceRead) {
        this.sourceRead = sourceRead;
        return this;
    }
    public Long statusCode;
    public WebBackendRecreateSourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}