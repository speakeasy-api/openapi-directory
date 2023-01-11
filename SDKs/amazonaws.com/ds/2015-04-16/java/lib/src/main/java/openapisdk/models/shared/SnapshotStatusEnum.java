package openapisdk.models.shared;


public enum SnapshotStatusEnum {
    CREATING("Creating"),
    COMPLETED("Completed"),
    FAILED("Failed");

    public final String value;

    private SnapshotStatusEnum(String value) {
        this.value = value;
    }
}
