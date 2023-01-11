package openapisdk.models.shared;


public enum ActionHistoryStatusEnum {
    COMPLETED("Completed"),
    FAILED("Failed"),
    UNKNOWN("Unknown");

    public final String value;

    private ActionHistoryStatusEnum(String value) {
        this.value = value;
    }
}
