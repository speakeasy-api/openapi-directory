package openapisdk.models.operations;



public class UpdateConfigurationSetEventDestinationResponse {
    public Object badRequestException;
    public UpdateConfigurationSetEventDestinationResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateConfigurationSetEventDestinationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public UpdateConfigurationSetEventDestinationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateConfigurationSetEventDestinationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateConfigurationSetEventDestinationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public java.util.Map<String, Object> updateConfigurationSetEventDestinationResponse;
    public UpdateConfigurationSetEventDestinationResponse withUpdateConfigurationSetEventDestinationResponse(java.util.Map<String, Object> updateConfigurationSetEventDestinationResponse) {
        this.updateConfigurationSetEventDestinationResponse = updateConfigurationSetEventDestinationResponse;
        return this;
    }
}