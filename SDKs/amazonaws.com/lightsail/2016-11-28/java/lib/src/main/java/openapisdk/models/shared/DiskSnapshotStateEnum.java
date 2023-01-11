package openapisdk.models.shared;


public enum DiskSnapshotStateEnum {
    PENDING("pending"),
    COMPLETED("completed"),
    ERROR("error"),
    UNKNOWN("unknown");

    public final String value;

    private DiskSnapshotStateEnum(String value) {
        this.value = value;
    }
}
