package openapisdk.models.operations;



public class GetSetInstanceHealthRequest {
    public GetSetInstanceHealthQueryParams queryParams;
    public GetSetInstanceHealthRequest withQueryParams(GetSetInstanceHealthQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSetInstanceHealthHeaders headers;
    public GetSetInstanceHealthRequest withHeaders(GetSetInstanceHealthHeaders headers) {
        this.headers = headers;
        return this;
    }
}