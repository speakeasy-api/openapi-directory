package openapisdk.models.shared;


public enum LogDeliveryConfigurationStatusEnum {
    ACTIVE("active"),
    ENABLING("enabling"),
    MODIFYING("modifying"),
    DISABLING("disabling"),
    ERROR("error");

    public final String value;

    private LogDeliveryConfigurationStatusEnum(String value) {
        this.value = value;
    }
}
