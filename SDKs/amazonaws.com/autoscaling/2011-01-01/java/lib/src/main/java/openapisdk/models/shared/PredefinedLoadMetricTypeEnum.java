package openapisdk.models.shared;


public enum PredefinedLoadMetricTypeEnum {
    ASG_TOTAL_CPU_UTILIZATION("ASGTotalCPUUtilization"),
    ASG_TOTAL_NETWORK_IN("ASGTotalNetworkIn"),
    ASG_TOTAL_NETWORK_OUT("ASGTotalNetworkOut"),
    ALB_TARGET_GROUP_REQUEST_COUNT("ALBTargetGroupRequestCount");

    public final String value;

    private PredefinedLoadMetricTypeEnum(String value) {
        this.value = value;
    }
}
