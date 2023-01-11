package openapisdk.models.operations;



public class CheckConnectionToDestinationResponse {
    public openapisdk.models.shared.CheckConnectionRead checkConnectionRead;
    public CheckConnectionToDestinationResponse withCheckConnectionRead(openapisdk.models.shared.CheckConnectionRead checkConnectionRead) {
        this.checkConnectionRead = checkConnectionRead;
        return this;
    }
    public String contentType;
    public CheckConnectionToDestinationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public CheckConnectionToDestinationResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo;
    public CheckConnectionToDestinationResponse withNotFoundKnownExceptionInfo(openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo) {
        this.notFoundKnownExceptionInfo = notFoundKnownExceptionInfo;
        return this;
    }
    public Long statusCode;
    public CheckConnectionToDestinationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}