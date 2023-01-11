package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAddonRequest {
    public UpdateAddonPathParams pathParams;
    public UpdateAddonRequest withPathParams(UpdateAddonPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateAddonHeaders headers;
    public UpdateAddonRequest withHeaders(UpdateAddonHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateAddonRequestBody request;
    public UpdateAddonRequest withRequest(UpdateAddonRequestBody request) {
        this.request = request;
        return this;
    }
}