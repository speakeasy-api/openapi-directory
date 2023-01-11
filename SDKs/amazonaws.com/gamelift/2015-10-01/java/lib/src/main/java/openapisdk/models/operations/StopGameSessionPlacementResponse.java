package openapisdk.models.operations;



public class StopGameSessionPlacementResponse {
    public String contentType;
    public StopGameSessionPlacementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public StopGameSessionPlacementResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public StopGameSessionPlacementResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public StopGameSessionPlacementResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public StopGameSessionPlacementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopGameSessionPlacementOutput stopGameSessionPlacementOutput;
    public StopGameSessionPlacementResponse withStopGameSessionPlacementOutput(openapisdk.models.shared.StopGameSessionPlacementOutput stopGameSessionPlacementOutput) {
        this.stopGameSessionPlacementOutput = stopGameSessionPlacementOutput;
        return this;
    }
    public Object unauthorizedException;
    public StopGameSessionPlacementResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}