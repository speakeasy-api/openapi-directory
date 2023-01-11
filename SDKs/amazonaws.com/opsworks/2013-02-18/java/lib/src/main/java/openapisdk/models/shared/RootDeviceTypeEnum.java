package openapisdk.models.shared;


public enum RootDeviceTypeEnum {
    EBS("ebs"),
    INSTANCE_STORE("instance-store");

    public final String value;

    private RootDeviceTypeEnum(String value) {
        this.value = value;
    }
}
