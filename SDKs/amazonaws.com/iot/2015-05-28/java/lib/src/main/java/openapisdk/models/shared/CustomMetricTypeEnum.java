package openapisdk.models.shared;


public enum CustomMetricTypeEnum {
    STRING_LIST("string-list"),
    IP_ADDRESS_LIST("ip-address-list"),
    NUMBER_LIST("number-list"),
    NUMBER("number");

    public final String value;

    private CustomMetricTypeEnum(String value) {
        this.value = value;
    }
}
