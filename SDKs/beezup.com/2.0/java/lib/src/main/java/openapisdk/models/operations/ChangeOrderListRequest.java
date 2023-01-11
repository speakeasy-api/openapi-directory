package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeOrderListRequest {
    public ChangeOrderListPathParams pathParams;
    public ChangeOrderListRequest withPathParams(ChangeOrderListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ChangeOrderListQueryParams queryParams;
    public ChangeOrderListRequest withQueryParams(ChangeOrderListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChangeOrderListRequest request;
    public ChangeOrderListRequest withRequest(openapisdk.models.shared.ChangeOrderListRequest request) {
        this.request = request;
        return this;
    }
}