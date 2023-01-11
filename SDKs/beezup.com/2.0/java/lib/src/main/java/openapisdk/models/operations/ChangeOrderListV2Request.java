package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeOrderListV2Request {
    public ChangeOrderListV2PathParams pathParams;
    public ChangeOrderListV2Request withPathParams(ChangeOrderListV2PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ChangeOrderListV2QueryParams queryParams;
    public ChangeOrderListV2Request withQueryParams(ChangeOrderListV2QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChangeOrderListRequestV2 request;
    public ChangeOrderListV2Request withRequest(openapisdk.models.shared.ChangeOrderListRequestV2 request) {
        this.request = request;
        return this;
    }
}