package openapisdk.models.operations;



public class DescribeBundleRequest {
    public DescribeBundlePathParams pathParams;
    public DescribeBundleRequest withPathParams(DescribeBundlePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeBundleHeaders headers;
    public DescribeBundleRequest withHeaders(DescribeBundleHeaders headers) {
        this.headers = headers;
        return this;
    }
}