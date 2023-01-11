package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDropletActionByTagRequest {
    public PostDropletActionByTagQueryParams queryParams;
    public PostDropletActionByTagRequest withQueryParams(PostDropletActionByTagQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostDropletActionByTagRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}