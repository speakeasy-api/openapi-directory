package openapisdk.models.shared;


public enum ActionStatusEnum {
    SCHEDULED("Scheduled"),
    PENDING("Pending"),
    RUNNING("Running"),
    UNKNOWN("Unknown");

    public final String value;

    private ActionStatusEnum(String value) {
        this.value = value;
    }
}
