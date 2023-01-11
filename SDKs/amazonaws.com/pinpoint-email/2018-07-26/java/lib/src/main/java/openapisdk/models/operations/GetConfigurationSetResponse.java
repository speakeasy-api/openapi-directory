package openapisdk.models.operations;



public class GetConfigurationSetResponse {
    public Object badRequestException;
    public GetConfigurationSetResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetConfigurationSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetConfigurationSetResponse getConfigurationSetResponse;
    public GetConfigurationSetResponse withGetConfigurationSetResponse(openapisdk.models.shared.GetConfigurationSetResponse getConfigurationSetResponse) {
        this.getConfigurationSetResponse = getConfigurationSetResponse;
        return this;
    }
    public Object notFoundException;
    public GetConfigurationSetResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetConfigurationSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetConfigurationSetResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}