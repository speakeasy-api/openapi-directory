package openapisdk.models.shared;


public enum ContainerServiceMetricNameEnum {
    CPU_UTILIZATION("CPUUtilization"),
    MEMORY_UTILIZATION("MemoryUtilization");

    public final String value;

    private ContainerServiceMetricNameEnum(String value) {
        this.value = value;
    }
}
