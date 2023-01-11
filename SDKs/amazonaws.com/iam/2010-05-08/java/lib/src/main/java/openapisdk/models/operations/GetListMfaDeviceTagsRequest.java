package openapisdk.models.operations;



public class GetListMfaDeviceTagsRequest {
    public GetListMfaDeviceTagsQueryParams queryParams;
    public GetListMfaDeviceTagsRequest withQueryParams(GetListMfaDeviceTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListMfaDeviceTagsHeaders headers;
    public GetListMfaDeviceTagsRequest withHeaders(GetListMfaDeviceTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
}