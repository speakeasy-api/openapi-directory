package openapisdk.models.operations;



public class ListDetectorModelVersionsRequest {
    public ListDetectorModelVersionsPathParams pathParams;
    public ListDetectorModelVersionsRequest withPathParams(ListDetectorModelVersionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListDetectorModelVersionsQueryParams queryParams;
    public ListDetectorModelVersionsRequest withQueryParams(ListDetectorModelVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDetectorModelVersionsHeaders headers;
    public ListDetectorModelVersionsRequest withHeaders(ListDetectorModelVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}