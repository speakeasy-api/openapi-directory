package openapisdk.models.operations;



public class DescribeMeshRequest {
    public DescribeMeshPathParams pathParams;
    public DescribeMeshRequest withPathParams(DescribeMeshPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeMeshHeaders headers;
    public DescribeMeshRequest withHeaders(DescribeMeshHeaders headers) {
        this.headers = headers;
        return this;
    }
}