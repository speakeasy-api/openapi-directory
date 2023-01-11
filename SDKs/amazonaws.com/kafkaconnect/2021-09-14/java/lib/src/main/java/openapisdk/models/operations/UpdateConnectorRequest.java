package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConnectorRequest {
    public UpdateConnectorPathParams pathParams;
    public UpdateConnectorRequest withPathParams(UpdateConnectorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateConnectorQueryParams queryParams;
    public UpdateConnectorRequest withQueryParams(UpdateConnectorQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UpdateConnectorHeaders headers;
    public UpdateConnectorRequest withHeaders(UpdateConnectorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateConnectorRequestBody request;
    public UpdateConnectorRequest withRequest(UpdateConnectorRequestBody request) {
        this.request = request;
        return this;
    }
}