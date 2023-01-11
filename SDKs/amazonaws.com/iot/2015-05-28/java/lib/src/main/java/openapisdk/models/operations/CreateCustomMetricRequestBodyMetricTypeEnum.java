package openapisdk.models.operations;


public enum CreateCustomMetricRequestBodyMetricTypeEnum {
    STRING_LIST("string-list"),
    IP_ADDRESS_LIST("ip-address-list"),
    NUMBER_LIST("number-list"),
    NUMBER("number");

    public final String value;

    private CreateCustomMetricRequestBodyMetricTypeEnum(String value) {
        this.value = value;
    }
}
