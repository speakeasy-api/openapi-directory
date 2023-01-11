package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceQuotasRequest {
    public ListServiceQuotasQueryParams queryParams;
    public ListServiceQuotasRequest withQueryParams(ListServiceQuotasQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListServiceQuotasHeaders headers;
    public ListServiceQuotasRequest withHeaders(ListServiceQuotasHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListServiceQuotasRequest request;
    public ListServiceQuotasRequest withRequest(openapisdk.models.shared.ListServiceQuotasRequest request) {
        this.request = request;
        return this;
    }
}