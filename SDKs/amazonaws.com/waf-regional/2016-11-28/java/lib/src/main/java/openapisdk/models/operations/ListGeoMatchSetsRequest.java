package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListGeoMatchSetsRequest {
    public ListGeoMatchSetsHeaders headers;
    public ListGeoMatchSetsRequest withHeaders(ListGeoMatchSetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListGeoMatchSetsRequest request;
    public ListGeoMatchSetsRequest withRequest(openapisdk.models.shared.ListGeoMatchSetsRequest request) {
        this.request = request;
        return this;
    }
}