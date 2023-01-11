package openapisdk.models.operations;



public class DescribePipelineRequest {
    public DescribePipelinePathParams pathParams;
    public DescribePipelineRequest withPathParams(DescribePipelinePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribePipelineHeaders headers;
    public DescribePipelineRequest withHeaders(DescribePipelineHeaders headers) {
        this.headers = headers;
        return this;
    }
}