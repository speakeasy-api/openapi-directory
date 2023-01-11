package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCampaignsRequest {
    public ListCampaignsQueryParams queryParams;
    public ListCampaignsRequest withQueryParams(ListCampaignsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCampaignsHeaders headers;
    public ListCampaignsRequest withHeaders(ListCampaignsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListCampaignsRequest request;
    public ListCampaignsRequest withRequest(openapisdk.models.shared.ListCampaignsRequest request) {
        this.request = request;
        return this;
    }
}