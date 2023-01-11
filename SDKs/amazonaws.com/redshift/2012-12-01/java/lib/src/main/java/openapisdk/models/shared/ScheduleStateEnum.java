package openapisdk.models.shared;


public enum ScheduleStateEnum {
    MODIFYING("MODIFYING"),
    ACTIVE("ACTIVE"),
    FAILED("FAILED");

    public final String value;

    private ScheduleStateEnum(String value) {
        this.value = value;
    }
}
