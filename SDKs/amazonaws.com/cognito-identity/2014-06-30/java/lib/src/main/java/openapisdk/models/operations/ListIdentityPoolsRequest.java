package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIdentityPoolsRequest {
    public ListIdentityPoolsQueryParams queryParams;
    public ListIdentityPoolsRequest withQueryParams(ListIdentityPoolsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListIdentityPoolsHeaders headers;
    public ListIdentityPoolsRequest withHeaders(ListIdentityPoolsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListIdentityPoolsInput request;
    public ListIdentityPoolsRequest withRequest(openapisdk.models.shared.ListIdentityPoolsInput request) {
        this.request = request;
        return this;
    }
}