package openapisdk.models.operations;



public class CheckConnectionToDestinationForUpdateResponse {
    public openapisdk.models.shared.CheckConnectionRead checkConnectionRead;
    public CheckConnectionToDestinationForUpdateResponse withCheckConnectionRead(openapisdk.models.shared.CheckConnectionRead checkConnectionRead) {
        this.checkConnectionRead = checkConnectionRead;
        return this;
    }
    public String contentType;
    public CheckConnectionToDestinationForUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public CheckConnectionToDestinationForUpdateResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo;
    public CheckConnectionToDestinationForUpdateResponse withNotFoundKnownExceptionInfo(openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo) {
        this.notFoundKnownExceptionInfo = notFoundKnownExceptionInfo;
        return this;
    }
    public Long statusCode;
    public CheckConnectionToDestinationForUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}