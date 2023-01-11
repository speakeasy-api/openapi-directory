package openapisdk.models.operations;


public enum DeleteConfigConfigTypeEnum {
    ANTENNA_DOWNLINK("antenna-downlink"),
    ANTENNA_DOWNLINK_DEMOD_DECODE("antenna-downlink-demod-decode"),
    ANTENNA_UPLINK("antenna-uplink"),
    DATAFLOW_ENDPOINT("dataflow-endpoint"),
    TRACKING("tracking"),
    UPLINK_ECHO("uplink-echo"),
    S3_RECORDING("s3-recording");

    public final String value;

    private DeleteConfigConfigTypeEnum(String value) {
        this.value = value;
    }
}
