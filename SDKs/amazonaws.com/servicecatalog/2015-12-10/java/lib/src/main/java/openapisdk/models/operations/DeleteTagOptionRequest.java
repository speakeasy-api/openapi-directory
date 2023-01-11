package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTagOptionRequest {
    public DeleteTagOptionHeaders headers;
    public DeleteTagOptionRequest withHeaders(DeleteTagOptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteTagOptionInput request;
    public DeleteTagOptionRequest withRequest(openapisdk.models.shared.DeleteTagOptionInput request) {
        this.request = request;
        return this;
    }
}