package openapisdk.models.operations;



public class DeleteConfigurationSetEventDestinationResponse {
    public Object badRequestException;
    public DeleteConfigurationSetEventDestinationResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteConfigurationSetEventDestinationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteConfigurationSetEventDestinationResponse;
    public DeleteConfigurationSetEventDestinationResponse withDeleteConfigurationSetEventDestinationResponse(java.util.Map<String, Object> deleteConfigurationSetEventDestinationResponse) {
        this.deleteConfigurationSetEventDestinationResponse = deleteConfigurationSetEventDestinationResponse;
        return this;
    }
    public Object notFoundException;
    public DeleteConfigurationSetEventDestinationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteConfigurationSetEventDestinationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteConfigurationSetEventDestinationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}