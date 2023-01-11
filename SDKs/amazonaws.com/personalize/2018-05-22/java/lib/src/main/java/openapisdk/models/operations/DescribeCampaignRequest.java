package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCampaignRequest {
    public DescribeCampaignHeaders headers;
    public DescribeCampaignRequest withHeaders(DescribeCampaignHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeCampaignRequest request;
    public DescribeCampaignRequest withRequest(openapisdk.models.shared.DescribeCampaignRequest request) {
        this.request = request;
        return this;
    }
}