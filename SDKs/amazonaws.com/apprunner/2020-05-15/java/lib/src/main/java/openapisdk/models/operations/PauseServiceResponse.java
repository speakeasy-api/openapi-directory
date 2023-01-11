package openapisdk.models.operations;



public class PauseServiceResponse {
    public String contentType;
    public PauseServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public PauseServiceResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidRequestException;
    public PauseServiceResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidStateException;
    public PauseServiceResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public openapisdk.models.shared.PauseServiceResponse pauseServiceResponse;
    public PauseServiceResponse withPauseServiceResponse(openapisdk.models.shared.PauseServiceResponse pauseServiceResponse) {
        this.pauseServiceResponse = pauseServiceResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PauseServiceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PauseServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}