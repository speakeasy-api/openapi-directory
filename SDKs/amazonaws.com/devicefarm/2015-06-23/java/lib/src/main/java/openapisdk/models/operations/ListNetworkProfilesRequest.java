package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListNetworkProfilesRequest {
    public ListNetworkProfilesHeaders headers;
    public ListNetworkProfilesRequest withHeaders(ListNetworkProfilesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListNetworkProfilesRequest request;
    public ListNetworkProfilesRequest withRequest(openapisdk.models.shared.ListNetworkProfilesRequest request) {
        this.request = request;
        return this;
    }
}