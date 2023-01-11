package openapisdk.models.shared;


public enum AccessTypeEnum {
    READ_ONLY("readOnly"),
    FULL("full"),
    CUSTOM("custom");

    public final String value;

    private AccessTypeEnum(String value) {
        this.value = value;
    }
}
