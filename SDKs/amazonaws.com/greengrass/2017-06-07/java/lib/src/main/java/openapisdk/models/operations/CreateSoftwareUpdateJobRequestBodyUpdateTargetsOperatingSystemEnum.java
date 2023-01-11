package openapisdk.models.operations;


public enum CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum {
    UBUNTU("ubuntu"),
    RASPBIAN("raspbian"),
    AMAZON_LINUX("amazon_linux"),
    OPENWRT("openwrt");

    public final String value;

    private CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum(String value) {
        this.value = value;
    }
}
