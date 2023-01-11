package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPartnerEventSourcesRequest {
    public ListPartnerEventSourcesHeaders headers;
    public ListPartnerEventSourcesRequest withHeaders(ListPartnerEventSourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListPartnerEventSourcesRequest request;
    public ListPartnerEventSourcesRequest withRequest(openapisdk.models.shared.ListPartnerEventSourcesRequest request) {
        this.request = request;
        return this;
    }
}