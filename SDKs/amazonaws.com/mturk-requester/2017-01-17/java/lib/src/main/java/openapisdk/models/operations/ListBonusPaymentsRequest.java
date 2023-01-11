package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBonusPaymentsRequest {
    public ListBonusPaymentsQueryParams queryParams;
    public ListBonusPaymentsRequest withQueryParams(ListBonusPaymentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBonusPaymentsHeaders headers;
    public ListBonusPaymentsRequest withHeaders(ListBonusPaymentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListBonusPaymentsRequest request;
    public ListBonusPaymentsRequest withRequest(openapisdk.models.shared.ListBonusPaymentsRequest request) {
        this.request = request;
        return this;
    }
}