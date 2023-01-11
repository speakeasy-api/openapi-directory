package openapisdk.models.shared;


public enum OperatingSystemEnum {
    WINDOWS2012("WINDOWS_2012"),
    AMAZON_LINUX("AMAZON_LINUX"),
    AMAZON_LINUX2("AMAZON_LINUX_2");

    public final String value;

    private OperatingSystemEnum(String value) {
        this.value = value;
    }
}
