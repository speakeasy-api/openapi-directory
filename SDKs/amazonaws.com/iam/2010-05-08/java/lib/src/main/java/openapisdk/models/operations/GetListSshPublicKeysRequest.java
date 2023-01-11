package openapisdk.models.operations;



public class GetListSshPublicKeysRequest {
    public GetListSshPublicKeysQueryParams queryParams;
    public GetListSshPublicKeysRequest withQueryParams(GetListSshPublicKeysQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListSshPublicKeysHeaders headers;
    public GetListSshPublicKeysRequest withHeaders(GetListSshPublicKeysHeaders headers) {
        this.headers = headers;
        return this;
    }
}