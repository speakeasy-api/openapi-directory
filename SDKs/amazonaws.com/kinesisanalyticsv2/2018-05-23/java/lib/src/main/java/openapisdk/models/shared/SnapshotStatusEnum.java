package openapisdk.models.shared;


public enum SnapshotStatusEnum {
    CREATING("CREATING"),
    READY("READY"),
    DELETING("DELETING"),
    FAILED("FAILED");

    public final String value;

    private SnapshotStatusEnum(String value) {
        this.value = value;
    }
}
