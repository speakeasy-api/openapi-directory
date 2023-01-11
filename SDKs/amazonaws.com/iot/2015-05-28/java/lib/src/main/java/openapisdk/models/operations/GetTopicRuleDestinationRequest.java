package openapisdk.models.operations;



public class GetTopicRuleDestinationRequest {
    public GetTopicRuleDestinationPathParams pathParams;
    public GetTopicRuleDestinationRequest withPathParams(GetTopicRuleDestinationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTopicRuleDestinationHeaders headers;
    public GetTopicRuleDestinationRequest withHeaders(GetTopicRuleDestinationHeaders headers) {
        this.headers = headers;
        return this;
    }
}