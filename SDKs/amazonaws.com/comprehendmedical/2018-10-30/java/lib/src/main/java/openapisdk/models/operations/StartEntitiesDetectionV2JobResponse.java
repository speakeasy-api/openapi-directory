package openapisdk.models.operations;



public class StartEntitiesDetectionV2JobResponse {
    public String contentType;
    public StartEntitiesDetectionV2JobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartEntitiesDetectionV2JobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StartEntitiesDetectionV2JobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartEntitiesDetectionV2JobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.StartEntitiesDetectionV2JobResponse startEntitiesDetectionV2JobResponse;
    public StartEntitiesDetectionV2JobResponse withStartEntitiesDetectionV2JobResponse(openapisdk.models.shared.StartEntitiesDetectionV2JobResponse startEntitiesDetectionV2JobResponse) {
        this.startEntitiesDetectionV2JobResponse = startEntitiesDetectionV2JobResponse;
        return this;
    }
    public Long statusCode;
    public StartEntitiesDetectionV2JobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public StartEntitiesDetectionV2JobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}