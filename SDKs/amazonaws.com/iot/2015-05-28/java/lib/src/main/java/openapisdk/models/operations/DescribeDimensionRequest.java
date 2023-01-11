package openapisdk.models.operations;



public class DescribeDimensionRequest {
    public DescribeDimensionPathParams pathParams;
    public DescribeDimensionRequest withPathParams(DescribeDimensionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeDimensionHeaders headers;
    public DescribeDimensionRequest withHeaders(DescribeDimensionHeaders headers) {
        this.headers = headers;
        return this;
    }
}