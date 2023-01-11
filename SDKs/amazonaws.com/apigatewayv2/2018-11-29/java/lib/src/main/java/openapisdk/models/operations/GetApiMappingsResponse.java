package openapisdk.models.operations;



public class GetApiMappingsResponse {
    public Object badRequestException;
    public GetApiMappingsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetApiMappingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetApiMappingsResponse getApiMappingsResponse;
    public GetApiMappingsResponse withGetApiMappingsResponse(openapisdk.models.shared.GetApiMappingsResponse getApiMappingsResponse) {
        this.getApiMappingsResponse = getApiMappingsResponse;
        return this;
    }
    public Object notFoundException;
    public GetApiMappingsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetApiMappingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetApiMappingsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}