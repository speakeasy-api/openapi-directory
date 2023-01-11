package openapisdk.models.shared;


public enum DeviceDetailsFormFactorEnum {
    PHONE("phone"),
    TABLET("tablet"),
    DESKTOP("desktop"),
    TV("tv"),
    WATCH("watch"),
    CAR("car"),
    EMBEDDED("embedded");

    public final String value;

    private DeviceDetailsFormFactorEnum(String value) {
        this.value = value;
    }
}
