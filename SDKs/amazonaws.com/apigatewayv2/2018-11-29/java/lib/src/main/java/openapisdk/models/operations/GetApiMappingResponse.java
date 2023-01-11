package openapisdk.models.operations;



public class GetApiMappingResponse {
    public Object badRequestException;
    public GetApiMappingResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetApiMappingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetApiMappingResponse getApiMappingResponse;
    public GetApiMappingResponse withGetApiMappingResponse(openapisdk.models.shared.GetApiMappingResponse getApiMappingResponse) {
        this.getApiMappingResponse = getApiMappingResponse;
        return this;
    }
    public Object notFoundException;
    public GetApiMappingResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetApiMappingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetApiMappingResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}