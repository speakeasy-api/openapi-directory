package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportAsProvisionedProductRequest {
    public ImportAsProvisionedProductHeaders headers;
    public ImportAsProvisionedProductRequest withHeaders(ImportAsProvisionedProductHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImportAsProvisionedProductInput request;
    public ImportAsProvisionedProductRequest withRequest(openapisdk.models.shared.ImportAsProvisionedProductInput request) {
        this.request = request;
        return this;
    }
}