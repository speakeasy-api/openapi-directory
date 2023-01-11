package openapisdk.models.operations;



public class DeleteSubscriptionDefinitionResponse {
    public Object badRequestException;
    public DeleteSubscriptionDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteSubscriptionDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteSubscriptionDefinitionResponse;
    public DeleteSubscriptionDefinitionResponse withDeleteSubscriptionDefinitionResponse(java.util.Map<String, Object> deleteSubscriptionDefinitionResponse) {
        this.deleteSubscriptionDefinitionResponse = deleteSubscriptionDefinitionResponse;
        return this;
    }
    public Long statusCode;
    public DeleteSubscriptionDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}