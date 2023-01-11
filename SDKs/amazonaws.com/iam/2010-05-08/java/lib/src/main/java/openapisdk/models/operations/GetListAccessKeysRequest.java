package openapisdk.models.operations;



public class GetListAccessKeysRequest {
    public GetListAccessKeysQueryParams queryParams;
    public GetListAccessKeysRequest withQueryParams(GetListAccessKeysQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListAccessKeysHeaders headers;
    public GetListAccessKeysRequest withHeaders(GetListAccessKeysHeaders headers) {
        this.headers = headers;
        return this;
    }
}