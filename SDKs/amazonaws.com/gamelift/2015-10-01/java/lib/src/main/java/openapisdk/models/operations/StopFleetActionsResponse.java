package openapisdk.models.operations;



public class StopFleetActionsResponse {
    public String contentType;
    public StopFleetActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public StopFleetActionsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public StopFleetActionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public StopFleetActionsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public StopFleetActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopFleetActionsOutput stopFleetActionsOutput;
    public StopFleetActionsResponse withStopFleetActionsOutput(openapisdk.models.shared.StopFleetActionsOutput stopFleetActionsOutput) {
        this.stopFleetActionsOutput = stopFleetActionsOutput;
        return this;
    }
    public Object unauthorizedException;
    public StopFleetActionsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}