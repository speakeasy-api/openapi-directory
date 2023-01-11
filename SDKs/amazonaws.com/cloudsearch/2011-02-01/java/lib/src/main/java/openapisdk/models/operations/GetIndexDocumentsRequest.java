package openapisdk.models.operations;



public class GetIndexDocumentsRequest {
    public GetIndexDocumentsQueryParams queryParams;
    public GetIndexDocumentsRequest withQueryParams(GetIndexDocumentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetIndexDocumentsHeaders headers;
    public GetIndexDocumentsRequest withHeaders(GetIndexDocumentsHeaders headers) {
        this.headers = headers;
        return this;
    }
}