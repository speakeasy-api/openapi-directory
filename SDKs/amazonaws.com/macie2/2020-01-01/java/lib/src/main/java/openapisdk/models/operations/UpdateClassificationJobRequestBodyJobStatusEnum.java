package openapisdk.models.operations;


public enum UpdateClassificationJobRequestBodyJobStatusEnum {
    RUNNING("RUNNING"),
    PAUSED("PAUSED"),
    CANCELLED("CANCELLED"),
    COMPLETE("COMPLETE"),
    IDLE("IDLE"),
    USER_PAUSED("USER_PAUSED");

    public final String value;

    private UpdateClassificationJobRequestBodyJobStatusEnum(String value) {
        this.value = value;
    }
}
