package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateClusterConfigRequest {
    public UpdateClusterConfigPathParams pathParams;
    public UpdateClusterConfigRequest withPathParams(UpdateClusterConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateClusterConfigHeaders headers;
    public UpdateClusterConfigRequest withHeaders(UpdateClusterConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateClusterConfigRequestBody request;
    public UpdateClusterConfigRequest withRequest(UpdateClusterConfigRequestBody request) {
        this.request = request;
        return this;
    }
}