package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWorkloadShareRequest {
    public UpdateWorkloadSharePathParams pathParams;
    public UpdateWorkloadShareRequest withPathParams(UpdateWorkloadSharePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateWorkloadShareHeaders headers;
    public UpdateWorkloadShareRequest withHeaders(UpdateWorkloadShareHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateWorkloadShareRequestBody request;
    public UpdateWorkloadShareRequest withRequest(UpdateWorkloadShareRequestBody request) {
        this.request = request;
        return this;
    }
}