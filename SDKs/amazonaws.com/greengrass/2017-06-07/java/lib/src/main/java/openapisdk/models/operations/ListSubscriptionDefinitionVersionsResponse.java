package openapisdk.models.operations;



public class ListSubscriptionDefinitionVersionsResponse {
    public Object badRequestException;
    public ListSubscriptionDefinitionVersionsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListSubscriptionDefinitionVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSubscriptionDefinitionVersionsResponse listSubscriptionDefinitionVersionsResponse;
    public ListSubscriptionDefinitionVersionsResponse withListSubscriptionDefinitionVersionsResponse(openapisdk.models.shared.ListSubscriptionDefinitionVersionsResponse listSubscriptionDefinitionVersionsResponse) {
        this.listSubscriptionDefinitionVersionsResponse = listSubscriptionDefinitionVersionsResponse;
        return this;
    }
    public Long statusCode;
    public ListSubscriptionDefinitionVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}