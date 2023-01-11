package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAwsDefaultServiceQuotasRequest {
    public ListAwsDefaultServiceQuotasQueryParams queryParams;
    public ListAwsDefaultServiceQuotasRequest withQueryParams(ListAwsDefaultServiceQuotasQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAwsDefaultServiceQuotasHeaders headers;
    public ListAwsDefaultServiceQuotasRequest withHeaders(ListAwsDefaultServiceQuotasHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAwsDefaultServiceQuotasRequest request;
    public ListAwsDefaultServiceQuotasRequest withRequest(openapisdk.models.shared.ListAwsDefaultServiceQuotasRequest request) {
        this.request = request;
        return this;
    }
}