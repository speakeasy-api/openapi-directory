package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRequestedServiceQuotaChangeHistoryRequest {
    public ListRequestedServiceQuotaChangeHistoryQueryParams queryParams;
    public ListRequestedServiceQuotaChangeHistoryRequest withQueryParams(ListRequestedServiceQuotaChangeHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRequestedServiceQuotaChangeHistoryHeaders headers;
    public ListRequestedServiceQuotaChangeHistoryRequest withHeaders(ListRequestedServiceQuotaChangeHistoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListRequestedServiceQuotaChangeHistoryRequest request;
    public ListRequestedServiceQuotaChangeHistoryRequest withRequest(openapisdk.models.shared.ListRequestedServiceQuotaChangeHistoryRequest request) {
        this.request = request;
        return this;
    }
}