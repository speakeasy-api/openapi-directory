package openapisdk.models.operations;



public class GetSubscriptionListResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetSubscriptionListResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetSubscriptionListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSubscriptionListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubscriptionIndex[] subscriptionIndices;
    public GetSubscriptionListResponse withSubscriptionIndices(openapisdk.models.shared.SubscriptionIndex[] subscriptionIndices) {
        this.subscriptionIndices = subscriptionIndices;
        return this;
    }
}