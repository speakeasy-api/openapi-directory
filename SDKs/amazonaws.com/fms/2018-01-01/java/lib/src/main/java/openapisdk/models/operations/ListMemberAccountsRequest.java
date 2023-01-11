package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMemberAccountsRequest {
    public ListMemberAccountsQueryParams queryParams;
    public ListMemberAccountsRequest withQueryParams(ListMemberAccountsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMemberAccountsHeaders headers;
    public ListMemberAccountsRequest withHeaders(ListMemberAccountsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListMemberAccountsRequest request;
    public ListMemberAccountsRequest withRequest(openapisdk.models.shared.ListMemberAccountsRequest request) {
        this.request = request;
        return this;
    }
}