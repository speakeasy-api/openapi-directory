package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListProvisionedProductPlansRequest {
    public ListProvisionedProductPlansHeaders headers;
    public ListProvisionedProductPlansRequest withHeaders(ListProvisionedProductPlansHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListProvisionedProductPlansInput request;
    public ListProvisionedProductPlansRequest withRequest(openapisdk.models.shared.ListProvisionedProductPlansInput request) {
        this.request = request;
        return this;
    }
}