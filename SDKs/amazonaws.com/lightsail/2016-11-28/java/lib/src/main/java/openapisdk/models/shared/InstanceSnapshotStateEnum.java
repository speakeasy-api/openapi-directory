package openapisdk.models.shared;


public enum InstanceSnapshotStateEnum {
    PENDING("pending"),
    ERROR("error"),
    AVAILABLE("available");

    public final String value;

    private InstanceSnapshotStateEnum(String value) {
        this.value = value;
    }
}
