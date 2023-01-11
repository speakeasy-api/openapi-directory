package openapisdk.models.shared;


public enum DeliveryStreamEncryptionStatusEnum {
    ENABLED("ENABLED"),
    ENABLING("ENABLING"),
    ENABLING_FAILED("ENABLING_FAILED"),
    DISABLED("DISABLED"),
    DISABLING("DISABLING"),
    DISABLING_FAILED("DISABLING_FAILED");

    public final String value;

    private DeliveryStreamEncryptionStatusEnum(String value) {
        this.value = value;
    }
}
