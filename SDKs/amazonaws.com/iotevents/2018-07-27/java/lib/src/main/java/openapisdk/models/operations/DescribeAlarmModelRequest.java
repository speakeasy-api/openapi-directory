package openapisdk.models.operations;



public class DescribeAlarmModelRequest {
    public DescribeAlarmModelPathParams pathParams;
    public DescribeAlarmModelRequest withPathParams(DescribeAlarmModelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeAlarmModelQueryParams queryParams;
    public DescribeAlarmModelRequest withQueryParams(DescribeAlarmModelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeAlarmModelHeaders headers;
    public DescribeAlarmModelRequest withHeaders(DescribeAlarmModelHeaders headers) {
        this.headers = headers;
        return this;
    }
}