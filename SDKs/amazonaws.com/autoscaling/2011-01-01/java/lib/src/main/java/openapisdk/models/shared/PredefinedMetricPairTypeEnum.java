package openapisdk.models.shared;


public enum PredefinedMetricPairTypeEnum {
    ASGCPU_UTILIZATION("ASGCPUUtilization"),
    ASG_NETWORK_IN("ASGNetworkIn"),
    ASG_NETWORK_OUT("ASGNetworkOut"),
    ALB_REQUEST_COUNT("ALBRequestCount");

    public final String value;

    private PredefinedMetricPairTypeEnum(String value) {
        this.value = value;
    }
}
