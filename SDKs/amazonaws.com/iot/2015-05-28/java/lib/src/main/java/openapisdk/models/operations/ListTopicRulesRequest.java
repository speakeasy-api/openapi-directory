package openapisdk.models.operations;



public class ListTopicRulesRequest {
    public ListTopicRulesQueryParams queryParams;
    public ListTopicRulesRequest withQueryParams(ListTopicRulesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTopicRulesHeaders headers;
    public ListTopicRulesRequest withHeaders(ListTopicRulesHeaders headers) {
        this.headers = headers;
        return this;
    }
}