package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigTypeData
 * <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
**/
public class ConfigTypeData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("antennaDownlinkConfig")
    public AntennaDownlinkConfig antennaDownlinkConfig;
    public ConfigTypeData withAntennaDownlinkConfig(AntennaDownlinkConfig antennaDownlinkConfig) {
        this.antennaDownlinkConfig = antennaDownlinkConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("antennaDownlinkDemodDecodeConfig")
    public AntennaDownlinkDemodDecodeConfig antennaDownlinkDemodDecodeConfig;
    public ConfigTypeData withAntennaDownlinkDemodDecodeConfig(AntennaDownlinkDemodDecodeConfig antennaDownlinkDemodDecodeConfig) {
        this.antennaDownlinkDemodDecodeConfig = antennaDownlinkDemodDecodeConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("antennaUplinkConfig")
    public AntennaUplinkConfig antennaUplinkConfig;
    public ConfigTypeData withAntennaUplinkConfig(AntennaUplinkConfig antennaUplinkConfig) {
        this.antennaUplinkConfig = antennaUplinkConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataflowEndpointConfig")
    public DataflowEndpointConfig dataflowEndpointConfig;
    public ConfigTypeData withDataflowEndpointConfig(DataflowEndpointConfig dataflowEndpointConfig) {
        this.dataflowEndpointConfig = dataflowEndpointConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3RecordingConfig")
    public S3RecordingConfig s3RecordingConfig;
    public ConfigTypeData withS3RecordingConfig(S3RecordingConfig s3RecordingConfig) {
        this.s3RecordingConfig = s3RecordingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingConfig")
    public TrackingConfig trackingConfig;
    public ConfigTypeData withTrackingConfig(TrackingConfig trackingConfig) {
        this.trackingConfig = trackingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uplinkEchoConfig")
    public UplinkEchoConfig uplinkEchoConfig;
    public ConfigTypeData withUplinkEchoConfig(UplinkEchoConfig uplinkEchoConfig) {
        this.uplinkEchoConfig = uplinkEchoConfig;
        return this;
    }
}