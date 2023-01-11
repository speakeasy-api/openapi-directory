package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConnectivityInfoRequest {
    public UpdateConnectivityInfoPathParams pathParams;
    public UpdateConnectivityInfoRequest withPathParams(UpdateConnectivityInfoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateConnectivityInfoHeaders headers;
    public UpdateConnectivityInfoRequest withHeaders(UpdateConnectivityInfoHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateConnectivityInfoRequestBody request;
    public UpdateConnectivityInfoRequest withRequest(UpdateConnectivityInfoRequestBody request) {
        this.request = request;
        return this;
    }
}