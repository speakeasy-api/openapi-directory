package openapisdk.models.operations;



public class GetListMfaDevicesRequest {
    public GetListMfaDevicesQueryParams queryParams;
    public GetListMfaDevicesRequest withQueryParams(GetListMfaDevicesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListMfaDevicesHeaders headers;
    public GetListMfaDevicesRequest withHeaders(GetListMfaDevicesHeaders headers) {
        this.headers = headers;
        return this;
    }
}