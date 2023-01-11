package openapisdk.models.shared;


public enum ResourceEnum {
    FILE_SYSTEM("FILE_SYSTEM"),
    MOUNT_TARGET("MOUNT_TARGET");

    public final String value;

    private ResourceEnum(String value) {
        this.value = value;
    }
}
