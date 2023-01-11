package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExecuteProvisionedProductServiceActionRequest {
    public ExecuteProvisionedProductServiceActionHeaders headers;
    public ExecuteProvisionedProductServiceActionRequest withHeaders(ExecuteProvisionedProductServiceActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExecuteProvisionedProductServiceActionInput request;
    public ExecuteProvisionedProductServiceActionRequest withRequest(openapisdk.models.shared.ExecuteProvisionedProductServiceActionInput request) {
        this.request = request;
        return this;
    }
}