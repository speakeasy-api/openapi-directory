package openapisdk.models.shared;


public enum VolumeTypeEnum {
    GP2("gp2"),
    IO1("io1"),
    STANDARD("standard");

    public final String value;

    private VolumeTypeEnum(String value) {
        this.value = value;
    }
}
