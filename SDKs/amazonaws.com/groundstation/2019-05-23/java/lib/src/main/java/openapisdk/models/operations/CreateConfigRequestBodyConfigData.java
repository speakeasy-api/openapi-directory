package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateConfigRequestBodyConfigData
 * <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
**/
public class CreateConfigRequestBodyConfigData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("antennaDownlinkConfig")
    public openapisdk.models.shared.AntennaDownlinkConfig antennaDownlinkConfig;
    public CreateConfigRequestBodyConfigData withAntennaDownlinkConfig(openapisdk.models.shared.AntennaDownlinkConfig antennaDownlinkConfig) {
        this.antennaDownlinkConfig = antennaDownlinkConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("antennaDownlinkDemodDecodeConfig")
    public openapisdk.models.shared.AntennaDownlinkDemodDecodeConfig antennaDownlinkDemodDecodeConfig;
    public CreateConfigRequestBodyConfigData withAntennaDownlinkDemodDecodeConfig(openapisdk.models.shared.AntennaDownlinkDemodDecodeConfig antennaDownlinkDemodDecodeConfig) {
        this.antennaDownlinkDemodDecodeConfig = antennaDownlinkDemodDecodeConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("antennaUplinkConfig")
    public openapisdk.models.shared.AntennaUplinkConfig antennaUplinkConfig;
    public CreateConfigRequestBodyConfigData withAntennaUplinkConfig(openapisdk.models.shared.AntennaUplinkConfig antennaUplinkConfig) {
        this.antennaUplinkConfig = antennaUplinkConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataflowEndpointConfig")
    public openapisdk.models.shared.DataflowEndpointConfig dataflowEndpointConfig;
    public CreateConfigRequestBodyConfigData withDataflowEndpointConfig(openapisdk.models.shared.DataflowEndpointConfig dataflowEndpointConfig) {
        this.dataflowEndpointConfig = dataflowEndpointConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3RecordingConfig")
    public openapisdk.models.shared.S3RecordingConfig s3RecordingConfig;
    public CreateConfigRequestBodyConfigData withS3RecordingConfig(openapisdk.models.shared.S3RecordingConfig s3RecordingConfig) {
        this.s3RecordingConfig = s3RecordingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingConfig")
    public openapisdk.models.shared.TrackingConfig trackingConfig;
    public CreateConfigRequestBodyConfigData withTrackingConfig(openapisdk.models.shared.TrackingConfig trackingConfig) {
        this.trackingConfig = trackingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uplinkEchoConfig")
    public openapisdk.models.shared.UplinkEchoConfig uplinkEchoConfig;
    public CreateConfigRequestBodyConfigData withUplinkEchoConfig(openapisdk.models.shared.UplinkEchoConfig uplinkEchoConfig) {
        this.uplinkEchoConfig = uplinkEchoConfig;
        return this;
    }
}