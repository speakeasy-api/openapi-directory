package openapisdk.models.shared;


public enum DeviceCgroupPermissionEnum {
    READ("READ"),
    WRITE("WRITE"),
    MKNOD("MKNOD");

    public final String value;

    private DeviceCgroupPermissionEnum(String value) {
        this.value = value;
    }
}
