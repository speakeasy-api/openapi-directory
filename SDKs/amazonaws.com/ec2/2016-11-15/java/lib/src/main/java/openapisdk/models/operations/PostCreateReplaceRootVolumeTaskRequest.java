package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateReplaceRootVolumeTaskRequest {
    public PostCreateReplaceRootVolumeTaskQueryParams queryParams;
    public PostCreateReplaceRootVolumeTaskRequest withQueryParams(PostCreateReplaceRootVolumeTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateReplaceRootVolumeTaskHeaders headers;
    public PostCreateReplaceRootVolumeTaskRequest withHeaders(PostCreateReplaceRootVolumeTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateReplaceRootVolumeTaskRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}