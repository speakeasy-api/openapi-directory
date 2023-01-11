package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIpSetsRequest {
    public ListIpSetsHeaders headers;
    public ListIpSetsRequest withHeaders(ListIpSetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListIpSetsRequest request;
    public ListIpSetsRequest withRequest(openapisdk.models.shared.ListIpSetsRequest request) {
        this.request = request;
        return this;
    }
}