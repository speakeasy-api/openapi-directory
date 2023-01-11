package openapisdk.models.operations;



public class CreateConfigurationSetEventDestinationResponse {
    public Object alreadyExistsException;
    public CreateConfigurationSetEventDestinationResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public Object badRequestException;
    public CreateConfigurationSetEventDestinationResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateConfigurationSetEventDestinationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createConfigurationSetEventDestinationResponse;
    public CreateConfigurationSetEventDestinationResponse withCreateConfigurationSetEventDestinationResponse(java.util.Map<String, Object> createConfigurationSetEventDestinationResponse) {
        this.createConfigurationSetEventDestinationResponse = createConfigurationSetEventDestinationResponse;
        return this;
    }
    public Object limitExceededException;
    public CreateConfigurationSetEventDestinationResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public CreateConfigurationSetEventDestinationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateConfigurationSetEventDestinationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateConfigurationSetEventDestinationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}