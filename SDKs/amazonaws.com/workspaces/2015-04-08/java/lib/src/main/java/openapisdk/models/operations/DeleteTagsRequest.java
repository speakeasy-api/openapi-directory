package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTagsRequest {
    public DeleteTagsHeaders headers;
    public DeleteTagsRequest withHeaders(DeleteTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteTagsRequest request;
    public DeleteTagsRequest withRequest(openapisdk.models.shared.DeleteTagsRequest request) {
        this.request = request;
        return this;
    }
}