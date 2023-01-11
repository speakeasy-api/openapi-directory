package openapisdk.models.shared;


public enum AutoSnapshotStatusEnum {
    SUCCESS("Success"),
    FAILED("Failed"),
    IN_PROGRESS("InProgress"),
    NOT_FOUND("NotFound");

    public final String value;

    private AutoSnapshotStatusEnum(String value) {
        this.value = value;
    }
}
