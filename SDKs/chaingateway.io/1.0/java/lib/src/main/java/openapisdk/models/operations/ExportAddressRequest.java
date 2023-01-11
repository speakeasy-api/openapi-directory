package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportAddressRequest {
    public ExportAddressHeaders headers;
    public ExportAddressRequest withHeaders(ExportAddressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExportAddressRequest request;
    public ExportAddressRequest withRequest(openapisdk.models.shared.ExportAddressRequest request) {
        this.request = request;
        return this;
    }
}