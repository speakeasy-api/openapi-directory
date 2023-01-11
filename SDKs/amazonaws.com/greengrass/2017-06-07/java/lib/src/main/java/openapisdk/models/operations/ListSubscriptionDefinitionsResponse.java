package openapisdk.models.operations;



public class ListSubscriptionDefinitionsResponse {
    public String contentType;
    public ListSubscriptionDefinitionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSubscriptionDefinitionsResponse listSubscriptionDefinitionsResponse;
    public ListSubscriptionDefinitionsResponse withListSubscriptionDefinitionsResponse(openapisdk.models.shared.ListSubscriptionDefinitionsResponse listSubscriptionDefinitionsResponse) {
        this.listSubscriptionDefinitionsResponse = listSubscriptionDefinitionsResponse;
        return this;
    }
    public Long statusCode;
    public ListSubscriptionDefinitionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}