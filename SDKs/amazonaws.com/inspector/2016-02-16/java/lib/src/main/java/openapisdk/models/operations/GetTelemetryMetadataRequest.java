package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTelemetryMetadataRequest {
    public GetTelemetryMetadataHeaders headers;
    public GetTelemetryMetadataRequest withHeaders(GetTelemetryMetadataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetTelemetryMetadataRequest request;
    public GetTelemetryMetadataRequest withRequest(openapisdk.models.shared.GetTelemetryMetadataRequest request) {
        this.request = request;
        return this;
    }
}