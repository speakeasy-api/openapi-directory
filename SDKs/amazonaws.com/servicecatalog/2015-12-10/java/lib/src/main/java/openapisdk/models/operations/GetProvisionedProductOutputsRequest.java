package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProvisionedProductOutputsRequest {
    public GetProvisionedProductOutputsQueryParams queryParams;
    public GetProvisionedProductOutputsRequest withQueryParams(GetProvisionedProductOutputsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetProvisionedProductOutputsHeaders headers;
    public GetProvisionedProductOutputsRequest withHeaders(GetProvisionedProductOutputsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetProvisionedProductOutputsInput request;
    public GetProvisionedProductOutputsRequest withRequest(openapisdk.models.shared.GetProvisionedProductOutputsInput request) {
        this.request = request;
        return this;
    }
}