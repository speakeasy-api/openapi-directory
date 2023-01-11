package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportKeyMaterialRequest {
    public ImportKeyMaterialHeaders headers;
    public ImportKeyMaterialRequest withHeaders(ImportKeyMaterialHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImportKeyMaterialRequest request;
    public ImportKeyMaterialRequest withRequest(openapisdk.models.shared.ImportKeyMaterialRequest request) {
        this.request = request;
        return this;
    }
}