package openapisdk.models.operations;



public class CheckConnectionToSourceResponse {
    public openapisdk.models.shared.CheckConnectionRead checkConnectionRead;
    public CheckConnectionToSourceResponse withCheckConnectionRead(openapisdk.models.shared.CheckConnectionRead checkConnectionRead) {
        this.checkConnectionRead = checkConnectionRead;
        return this;
    }
    public String contentType;
    public CheckConnectionToSourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public CheckConnectionToSourceResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo;
    public CheckConnectionToSourceResponse withNotFoundKnownExceptionInfo(openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo) {
        this.notFoundKnownExceptionInfo = notFoundKnownExceptionInfo;
        return this;
    }
    public Long statusCode;
    public CheckConnectionToSourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}