package openapisdk.models.shared;


public enum ConfigCapabilityTypeEnum {
    ANTENNA_DOWNLINK("antenna-downlink"),
    ANTENNA_DOWNLINK_DEMOD_DECODE("antenna-downlink-demod-decode"),
    ANTENNA_UPLINK("antenna-uplink"),
    DATAFLOW_ENDPOINT("dataflow-endpoint"),
    TRACKING("tracking"),
    UPLINK_ECHO("uplink-echo"),
    S3_RECORDING("s3-recording");

    public final String value;

    private ConfigCapabilityTypeEnum(String value) {
        this.value = value;
    }
}
