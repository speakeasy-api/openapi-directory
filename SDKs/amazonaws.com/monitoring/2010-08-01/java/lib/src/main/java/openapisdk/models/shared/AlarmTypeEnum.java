package openapisdk.models.shared;


public enum AlarmTypeEnum {
    COMPOSITE_ALARM("CompositeAlarm"),
    METRIC_ALARM("MetricAlarm");

    public final String value;

    private AlarmTypeEnum(String value) {
        this.value = value;
    }
}
