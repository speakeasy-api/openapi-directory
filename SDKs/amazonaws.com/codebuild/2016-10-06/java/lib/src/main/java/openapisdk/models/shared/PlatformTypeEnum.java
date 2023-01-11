package openapisdk.models.shared;


public enum PlatformTypeEnum {
    DEBIAN("DEBIAN"),
    AMAZON_LINUX("AMAZON_LINUX"),
    UBUNTU("UBUNTU"),
    WINDOWS_SERVER("WINDOWS_SERVER");

    public final String value;

    private PlatformTypeEnum(String value) {
        this.value = value;
    }
}
