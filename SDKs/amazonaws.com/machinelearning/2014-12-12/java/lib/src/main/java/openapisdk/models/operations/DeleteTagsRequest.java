package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTagsRequest {
    public DeleteTagsHeaders headers;
    public DeleteTagsRequest withHeaders(DeleteTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteTagsInput request;
    public DeleteTagsRequest withRequest(openapisdk.models.shared.DeleteTagsInput request) {
        this.request = request;
        return this;
    }
}