package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunClusterlintRequest {
    public RunClusterlintPathParams pathParams;
    public RunClusterlintRequest withPathParams(RunClusterlintPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RunClusterlintRequestBody request;
    public RunClusterlintRequest withRequest(RunClusterlintRequestBody request) {
        this.request = request;
        return this;
    }
}