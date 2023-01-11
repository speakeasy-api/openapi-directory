package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MarkdownRenderRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MarkdownRenderRequestBody request;
    public MarkdownRenderRequest withRequest(MarkdownRenderRequestBody request) {
        this.request = request;
        return this;
    }
}