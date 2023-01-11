package openapisdk.models.operations;



public class GetSubscriptionDefinitionResponse {
    public Object badRequestException;
    public GetSubscriptionDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetSubscriptionDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSubscriptionDefinitionResponse getSubscriptionDefinitionResponse;
    public GetSubscriptionDefinitionResponse withGetSubscriptionDefinitionResponse(openapisdk.models.shared.GetSubscriptionDefinitionResponse getSubscriptionDefinitionResponse) {
        this.getSubscriptionDefinitionResponse = getSubscriptionDefinitionResponse;
        return this;
    }
    public Long statusCode;
    public GetSubscriptionDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}