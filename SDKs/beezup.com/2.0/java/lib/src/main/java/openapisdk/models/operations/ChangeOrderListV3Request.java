package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeOrderListV3Request {
    public ChangeOrderListV3QueryParams queryParams;
    public ChangeOrderListV3Request withQueryParams(ChangeOrderListV3QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChangeOrderListRequest request;
    public ChangeOrderListV3Request withRequest(openapisdk.models.shared.ChangeOrderListRequest request) {
        this.request = request;
        return this;
    }
}