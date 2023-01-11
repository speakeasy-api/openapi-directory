package openapisdk.models.operations;



public class GetConfigurationSetEventDestinationsResponse {
    public Object badRequestException;
    public GetConfigurationSetEventDestinationsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetConfigurationSetEventDestinationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetConfigurationSetEventDestinationsResponse getConfigurationSetEventDestinationsResponse;
    public GetConfigurationSetEventDestinationsResponse withGetConfigurationSetEventDestinationsResponse(openapisdk.models.shared.GetConfigurationSetEventDestinationsResponse getConfigurationSetEventDestinationsResponse) {
        this.getConfigurationSetEventDestinationsResponse = getConfigurationSetEventDestinationsResponse;
        return this;
    }
    public Object notFoundException;
    public GetConfigurationSetEventDestinationsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetConfigurationSetEventDestinationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetConfigurationSetEventDestinationsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}