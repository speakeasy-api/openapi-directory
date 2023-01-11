package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVirtualNodeRequest {
    public CreateVirtualNodePathParams pathParams;
    public CreateVirtualNodeRequest withPathParams(CreateVirtualNodePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateVirtualNodeQueryParams queryParams;
    public CreateVirtualNodeRequest withQueryParams(CreateVirtualNodeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CreateVirtualNodeHeaders headers;
    public CreateVirtualNodeRequest withHeaders(CreateVirtualNodeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateVirtualNodeRequestBody request;
    public CreateVirtualNodeRequest withRequest(CreateVirtualNodeRequestBody request) {
        this.request = request;
        return this;
    }
}