package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPartnerEventSourceAccountsRequest {
    public ListPartnerEventSourceAccountsHeaders headers;
    public ListPartnerEventSourceAccountsRequest withHeaders(ListPartnerEventSourceAccountsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListPartnerEventSourceAccountsRequest request;
    public ListPartnerEventSourceAccountsRequest withRequest(openapisdk.models.shared.ListPartnerEventSourceAccountsRequest request) {
        this.request = request;
        return this;
    }
}