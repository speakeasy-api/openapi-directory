package openapisdk.models.operations;



public class GetSubscriptionDefinitionVersionResponse {
    public Object badRequestException;
    public GetSubscriptionDefinitionVersionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetSubscriptionDefinitionVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSubscriptionDefinitionVersionResponse getSubscriptionDefinitionVersionResponse;
    public GetSubscriptionDefinitionVersionResponse withGetSubscriptionDefinitionVersionResponse(openapisdk.models.shared.GetSubscriptionDefinitionVersionResponse getSubscriptionDefinitionVersionResponse) {
        this.getSubscriptionDefinitionVersionResponse = getSubscriptionDefinitionVersionResponse;
        return this;
    }
    public Long statusCode;
    public GetSubscriptionDefinitionVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}