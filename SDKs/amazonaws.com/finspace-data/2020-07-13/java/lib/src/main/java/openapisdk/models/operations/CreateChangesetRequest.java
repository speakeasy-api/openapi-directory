package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateChangesetRequest {
    public CreateChangesetPathParams pathParams;
    public CreateChangesetRequest withPathParams(CreateChangesetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateChangesetHeaders headers;
    public CreateChangesetRequest withHeaders(CreateChangesetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateChangesetRequestBody request;
    public CreateChangesetRequest withRequest(CreateChangesetRequestBody request) {
        this.request = request;
        return this;
    }
}