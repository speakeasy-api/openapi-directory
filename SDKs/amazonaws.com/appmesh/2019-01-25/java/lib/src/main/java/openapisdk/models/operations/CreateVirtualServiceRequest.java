package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVirtualServiceRequest {
    public CreateVirtualServicePathParams pathParams;
    public CreateVirtualServiceRequest withPathParams(CreateVirtualServicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateVirtualServiceQueryParams queryParams;
    public CreateVirtualServiceRequest withQueryParams(CreateVirtualServiceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CreateVirtualServiceHeaders headers;
    public CreateVirtualServiceRequest withHeaders(CreateVirtualServiceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateVirtualServiceRequestBody request;
    public CreateVirtualServiceRequest withRequest(CreateVirtualServiceRequestBody request) {
        this.request = request;
        return this;
    }
}