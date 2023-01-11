package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportKeyPairRequest {
    public ImportKeyPairHeaders headers;
    public ImportKeyPairRequest withHeaders(ImportKeyPairHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImportKeyPairRequest request;
    public ImportKeyPairRequest withRequest(openapisdk.models.shared.ImportKeyPairRequest request) {
        this.request = request;
        return this;
    }
}