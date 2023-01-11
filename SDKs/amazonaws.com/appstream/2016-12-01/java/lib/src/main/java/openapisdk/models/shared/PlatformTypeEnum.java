package openapisdk.models.shared;


public enum PlatformTypeEnum {
    WINDOWS("WINDOWS"),
    WINDOWS_SERVER2016("WINDOWS_SERVER_2016"),
    WINDOWS_SERVER2019("WINDOWS_SERVER_2019");

    public final String value;

    private PlatformTypeEnum(String value) {
        this.value = value;
    }
}
