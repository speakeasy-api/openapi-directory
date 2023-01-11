package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportServerEngineAttributeRequest {
    public ExportServerEngineAttributeHeaders headers;
    public ExportServerEngineAttributeRequest withHeaders(ExportServerEngineAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExportServerEngineAttributeRequest request;
    public ExportServerEngineAttributeRequest withRequest(openapisdk.models.shared.ExportServerEngineAttributeRequest request) {
        this.request = request;
        return this;
    }
}