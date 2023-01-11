package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveLfTagsFromResourceRequest {
    public RemoveLfTagsFromResourceHeaders headers;
    public RemoveLfTagsFromResourceRequest withHeaders(RemoveLfTagsFromResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemoveLfTagsFromResourceRequest request;
    public RemoveLfTagsFromResourceRequest withRequest(openapisdk.models.shared.RemoveLfTagsFromResourceRequest request) {
        this.request = request;
        return this;
    }
}