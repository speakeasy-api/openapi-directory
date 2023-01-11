package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportAddressRequest {
    public ImportAddressHeaders headers;
    public ImportAddressRequest withHeaders(ImportAddressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImportAddressRequest request;
    public ImportAddressRequest withRequest(openapisdk.models.shared.ImportAddressRequest request) {
        this.request = request;
        return this;
    }
}