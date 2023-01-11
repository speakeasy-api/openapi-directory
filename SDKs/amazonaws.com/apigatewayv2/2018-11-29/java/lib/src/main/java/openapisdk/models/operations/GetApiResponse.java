package openapisdk.models.operations;



public class GetApiResponse {
    public String contentType;
    public GetApiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetApiResponse getApiResponse;
    public GetApiResponse withGetApiResponse(openapisdk.models.shared.GetApiResponse getApiResponse) {
        this.getApiResponse = getApiResponse;
        return this;
    }
    public Object notFoundException;
    public GetApiResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetApiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetApiResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}