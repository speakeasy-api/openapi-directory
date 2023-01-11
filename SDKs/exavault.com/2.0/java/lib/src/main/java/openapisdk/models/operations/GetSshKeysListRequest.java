package openapisdk.models.operations;



public class GetSshKeysListRequest {
    public GetSshKeysListQueryParams queryParams;
    public GetSshKeysListRequest withQueryParams(GetSshKeysListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSshKeysListHeaders headers;
    public GetSshKeysListRequest withHeaders(GetSshKeysListHeaders headers) {
        this.headers = headers;
        return this;
    }
}