package openapisdk.models.operations;



public class GetSubscriptionStateResponse {
    public String contentType;
    public GetSubscriptionStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSubscriptionStateResponse getSubscriptionStateResponse;
    public GetSubscriptionStateResponse withGetSubscriptionStateResponse(openapisdk.models.shared.GetSubscriptionStateResponse getSubscriptionStateResponse) {
        this.getSubscriptionStateResponse = getSubscriptionStateResponse;
        return this;
    }
    public Object internalErrorException;
    public GetSubscriptionStateResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Long statusCode;
    public GetSubscriptionStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}