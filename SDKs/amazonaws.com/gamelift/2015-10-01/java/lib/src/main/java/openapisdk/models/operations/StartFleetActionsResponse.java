package openapisdk.models.operations;



public class StartFleetActionsResponse {
    public String contentType;
    public StartFleetActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public StartFleetActionsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public StartFleetActionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public StartFleetActionsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.StartFleetActionsOutput startFleetActionsOutput;
    public StartFleetActionsResponse withStartFleetActionsOutput(openapisdk.models.shared.StartFleetActionsOutput startFleetActionsOutput) {
        this.startFleetActionsOutput = startFleetActionsOutput;
        return this;
    }
    public Long statusCode;
    public StartFleetActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public StartFleetActionsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}