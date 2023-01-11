package openapisdk.models.operations;



public class CreateSubscriptionDefinitionResponse {
    public Object badRequestException;
    public CreateSubscriptionDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateSubscriptionDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSubscriptionDefinitionResponse createSubscriptionDefinitionResponse;
    public CreateSubscriptionDefinitionResponse withCreateSubscriptionDefinitionResponse(openapisdk.models.shared.CreateSubscriptionDefinitionResponse createSubscriptionDefinitionResponse) {
        this.createSubscriptionDefinitionResponse = createSubscriptionDefinitionResponse;
        return this;
    }
    public Long statusCode;
    public CreateSubscriptionDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}