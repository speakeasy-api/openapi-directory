package openapisdk.models.operations;



public class CreateSubscriptionDefinitionVersionResponse {
    public Object badRequestException;
    public CreateSubscriptionDefinitionVersionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateSubscriptionDefinitionVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSubscriptionDefinitionVersionResponse createSubscriptionDefinitionVersionResponse;
    public CreateSubscriptionDefinitionVersionResponse withCreateSubscriptionDefinitionVersionResponse(openapisdk.models.shared.CreateSubscriptionDefinitionVersionResponse createSubscriptionDefinitionVersionResponse) {
        this.createSubscriptionDefinitionVersionResponse = createSubscriptionDefinitionVersionResponse;
        return this;
    }
    public Long statusCode;
    public CreateSubscriptionDefinitionVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}