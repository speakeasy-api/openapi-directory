package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListStackInstancesForProvisionedProductRequest {
    public ListStackInstancesForProvisionedProductHeaders headers;
    public ListStackInstancesForProvisionedProductRequest withHeaders(ListStackInstancesForProvisionedProductHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListStackInstancesForProvisionedProductInput request;
    public ListStackInstancesForProvisionedProductRequest withRequest(openapisdk.models.shared.ListStackInstancesForProvisionedProductInput request) {
        this.request = request;
        return this;
    }
}