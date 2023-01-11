package openapisdk.models.operations;



public class GetTopicRuleRequest {
    public GetTopicRulePathParams pathParams;
    public GetTopicRuleRequest withPathParams(GetTopicRulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTopicRuleHeaders headers;
    public GetTopicRuleRequest withHeaders(GetTopicRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
}