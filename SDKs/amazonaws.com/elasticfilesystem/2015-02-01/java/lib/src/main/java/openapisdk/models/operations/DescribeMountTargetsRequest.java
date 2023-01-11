package openapisdk.models.operations;



public class DescribeMountTargetsRequest {
    public DescribeMountTargetsQueryParams queryParams;
    public DescribeMountTargetsRequest withQueryParams(DescribeMountTargetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeMountTargetsHeaders headers;
    public DescribeMountTargetsRequest withHeaders(DescribeMountTargetsHeaders headers) {
        this.headers = headers;
        return this;
    }
}