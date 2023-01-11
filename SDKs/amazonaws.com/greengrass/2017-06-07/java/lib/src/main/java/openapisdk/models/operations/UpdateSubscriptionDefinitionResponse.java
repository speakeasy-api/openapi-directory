package openapisdk.models.operations;



public class UpdateSubscriptionDefinitionResponse {
    public Object badRequestException;
    public UpdateSubscriptionDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateSubscriptionDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSubscriptionDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateSubscriptionDefinitionResponse;
    public UpdateSubscriptionDefinitionResponse withUpdateSubscriptionDefinitionResponse(java.util.Map<String, Object> updateSubscriptionDefinitionResponse) {
        this.updateSubscriptionDefinitionResponse = updateSubscriptionDefinitionResponse;
        return this;
    }
}