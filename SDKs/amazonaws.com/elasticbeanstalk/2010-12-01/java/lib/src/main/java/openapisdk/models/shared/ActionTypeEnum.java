package openapisdk.models.shared;


public enum ActionTypeEnum {
    INSTANCE_REFRESH("InstanceRefresh"),
    PLATFORM_UPDATE("PlatformUpdate"),
    UNKNOWN("Unknown");

    public final String value;

    private ActionTypeEnum(String value) {
        this.value = value;
    }
}
