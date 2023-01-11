package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateClusterVersionRequest {
    public UpdateClusterVersionPathParams pathParams;
    public UpdateClusterVersionRequest withPathParams(UpdateClusterVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateClusterVersionHeaders headers;
    public UpdateClusterVersionRequest withHeaders(UpdateClusterVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateClusterVersionRequestBody request;
    public UpdateClusterVersionRequest withRequest(UpdateClusterVersionRequestBody request) {
        this.request = request;
        return this;
    }
}