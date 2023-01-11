package openapisdk.models.shared;


public enum SchedulingTypeEnum {
    SCHEDULE("Schedule"),
    INTERVAL("Interval");

    public final String value;

    private SchedulingTypeEnum(String value) {
        this.value = value;
    }
}
