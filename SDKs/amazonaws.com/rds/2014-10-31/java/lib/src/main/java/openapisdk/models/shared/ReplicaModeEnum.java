package openapisdk.models.shared;


public enum ReplicaModeEnum {
    OPEN_READ_ONLY("open-read-only"),
    MOUNTED("mounted");

    public final String value;

    private ReplicaModeEnum(String value) {
        this.value = value;
    }
}
