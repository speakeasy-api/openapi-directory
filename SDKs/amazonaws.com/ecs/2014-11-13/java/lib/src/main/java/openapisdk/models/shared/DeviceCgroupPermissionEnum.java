package openapisdk.models.shared;


public enum DeviceCgroupPermissionEnum {
    READ("read"),
    WRITE("write"),
    MKNOD("mknod");

    public final String value;

    private DeviceCgroupPermissionEnum(String value) {
        this.value = value;
    }
}
