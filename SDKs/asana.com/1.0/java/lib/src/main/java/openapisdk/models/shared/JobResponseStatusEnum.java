package openapisdk.models.shared;


public enum JobResponseStatusEnum {
    NOT_STARTED("not_started"),
    IN_PROGRESS("in_progress"),
    COMPLETED("completed"),
    FAILED("failed");

    public final String value;

    private JobResponseStatusEnum(String value) {
        this.value = value;
    }
}
