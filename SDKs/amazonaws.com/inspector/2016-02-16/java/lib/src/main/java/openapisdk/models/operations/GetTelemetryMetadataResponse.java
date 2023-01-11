package openapisdk.models.operations;



public class GetTelemetryMetadataResponse {
    public Object accessDeniedException;
    public GetTelemetryMetadataResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetTelemetryMetadataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetTelemetryMetadataResponse getTelemetryMetadataResponse;
    public GetTelemetryMetadataResponse withGetTelemetryMetadataResponse(openapisdk.models.shared.GetTelemetryMetadataResponse getTelemetryMetadataResponse) {
        this.getTelemetryMetadataResponse = getTelemetryMetadataResponse;
        return this;
    }
    public Object internalException;
    public GetTelemetryMetadataResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public GetTelemetryMetadataResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object noSuchEntityException;
    public GetTelemetryMetadataResponse withNoSuchEntityException(Object noSuchEntityException) {
        this.noSuchEntityException = noSuchEntityException;
        return this;
    }
    public Long statusCode;
    public GetTelemetryMetadataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}