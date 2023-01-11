package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVirtualRouterRequest {
    public CreateVirtualRouterPathParams pathParams;
    public CreateVirtualRouterRequest withPathParams(CreateVirtualRouterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateVirtualRouterQueryParams queryParams;
    public CreateVirtualRouterRequest withQueryParams(CreateVirtualRouterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CreateVirtualRouterHeaders headers;
    public CreateVirtualRouterRequest withHeaders(CreateVirtualRouterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateVirtualRouterRequestBody request;
    public CreateVirtualRouterRequest withRequest(CreateVirtualRouterRequestBody request) {
        this.request = request;
        return this;
    }
}