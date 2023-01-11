package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSizeConstraintSetsRequest {
    public ListSizeConstraintSetsHeaders headers;
    public ListSizeConstraintSetsRequest withHeaders(ListSizeConstraintSetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListSizeConstraintSetsRequest request;
    public ListSizeConstraintSetsRequest withRequest(openapisdk.models.shared.ListSizeConstraintSetsRequest request) {
        this.request = request;
        return this;
    }
}