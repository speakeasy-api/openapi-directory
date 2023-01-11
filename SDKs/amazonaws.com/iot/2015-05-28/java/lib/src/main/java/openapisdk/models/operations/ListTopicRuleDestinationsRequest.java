package openapisdk.models.operations;



public class ListTopicRuleDestinationsRequest {
    public ListTopicRuleDestinationsQueryParams queryParams;
    public ListTopicRuleDestinationsRequest withQueryParams(ListTopicRuleDestinationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTopicRuleDestinationsHeaders headers;
    public ListTopicRuleDestinationsRequest withHeaders(ListTopicRuleDestinationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}