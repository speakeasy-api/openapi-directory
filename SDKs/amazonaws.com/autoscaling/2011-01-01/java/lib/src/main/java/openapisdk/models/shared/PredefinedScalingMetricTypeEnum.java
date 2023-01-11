package openapisdk.models.shared;


public enum PredefinedScalingMetricTypeEnum {
    ASG_AVERAGE_CPU_UTILIZATION("ASGAverageCPUUtilization"),
    ASG_AVERAGE_NETWORK_IN("ASGAverageNetworkIn"),
    ASG_AVERAGE_NETWORK_OUT("ASGAverageNetworkOut"),
    ALB_REQUEST_COUNT_PER_TARGET("ALBRequestCountPerTarget");

    public final String value;

    private PredefinedScalingMetricTypeEnum(String value) {
        this.value = value;
    }
}
