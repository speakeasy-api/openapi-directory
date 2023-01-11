package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTagsForProjectRequest {
    public ListTagsForProjectHeaders headers;
    public ListTagsForProjectRequest withHeaders(ListTagsForProjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTagsForProjectRequest request;
    public ListTagsForProjectRequest withRequest(openapisdk.models.shared.ListTagsForProjectRequest request) {
        this.request = request;
        return this;
    }
}