package openapisdk.models.operations;



public class GetStateResponse {
    public openapisdk.models.shared.ConnectionState connectionState;
    public GetStateResponse withConnectionState(openapisdk.models.shared.ConnectionState connectionState) {
        this.connectionState = connectionState;
        return this;
    }
    public String contentType;
    public GetStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public GetStateResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo;
    public GetStateResponse withNotFoundKnownExceptionInfo(openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo) {
        this.notFoundKnownExceptionInfo = notFoundKnownExceptionInfo;
        return this;
    }
    public Long statusCode;
    public GetStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}