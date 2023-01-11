package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRequestedServiceQuotaChangeHistoryByQuotaRequest {
    public ListRequestedServiceQuotaChangeHistoryByQuotaQueryParams queryParams;
    public ListRequestedServiceQuotaChangeHistoryByQuotaRequest withQueryParams(ListRequestedServiceQuotaChangeHistoryByQuotaQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRequestedServiceQuotaChangeHistoryByQuotaHeaders headers;
    public ListRequestedServiceQuotaChangeHistoryByQuotaRequest withHeaders(ListRequestedServiceQuotaChangeHistoryByQuotaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListRequestedServiceQuotaChangeHistoryByQuotaRequest request;
    public ListRequestedServiceQuotaChangeHistoryByQuotaRequest withRequest(openapisdk.models.shared.ListRequestedServiceQuotaChangeHistoryByQuotaRequest request) {
        this.request = request;
        return this;
    }
}