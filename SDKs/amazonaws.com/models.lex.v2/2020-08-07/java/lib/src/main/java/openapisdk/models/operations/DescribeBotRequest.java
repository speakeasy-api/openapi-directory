package openapisdk.models.operations;



public class DescribeBotRequest {
    public DescribeBotPathParams pathParams;
    public DescribeBotRequest withPathParams(DescribeBotPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeBotHeaders headers;
    public DescribeBotRequest withHeaders(DescribeBotHeaders headers) {
        this.headers = headers;
        return this;
    }
}