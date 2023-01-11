package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetTelemetryMetadataResponse {
    @JsonProperty("telemetryMetadata")
    public TelemetryMetadata[] telemetryMetadata;
    public GetTelemetryMetadataResponse withTelemetryMetadata(TelemetryMetadata[] telemetryMetadata) {
        this.telemetryMetadata = telemetryMetadata;
        return this;
    }
}