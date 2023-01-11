package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ScanProvisionedProductsRequest {
    public ScanProvisionedProductsHeaders headers;
    public ScanProvisionedProductsRequest withHeaders(ScanProvisionedProductsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ScanProvisionedProductsInput request;
    public ScanProvisionedProductsRequest withRequest(openapisdk.models.shared.ScanProvisionedProductsInput request) {
        this.request = request;
        return this;
    }
}