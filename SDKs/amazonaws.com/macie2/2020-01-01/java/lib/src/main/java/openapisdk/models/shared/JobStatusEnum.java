package openapisdk.models.shared;


public enum JobStatusEnum {
    RUNNING("RUNNING"),
    PAUSED("PAUSED"),
    CANCELLED("CANCELLED"),
    COMPLETE("COMPLETE"),
    IDLE("IDLE"),
    USER_PAUSED("USER_PAUSED");

    public final String value;

    private JobStatusEnum(String value) {
        this.value = value;
    }
}
