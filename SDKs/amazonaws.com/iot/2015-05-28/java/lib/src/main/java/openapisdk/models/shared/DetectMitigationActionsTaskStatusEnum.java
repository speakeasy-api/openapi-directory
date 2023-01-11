package openapisdk.models.shared;


public enum DetectMitigationActionsTaskStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    SUCCESSFUL("SUCCESSFUL"),
    FAILED("FAILED"),
    CANCELED("CANCELED");

    public final String value;

    private DetectMitigationActionsTaskStatusEnum(String value) {
        this.value = value;
    }
}
