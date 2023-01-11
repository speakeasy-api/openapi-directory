package openapisdk.models.shared;


public enum OrderTendersCardEntryMethodEnum {
    EVM("evm"),
    SWIPED("swiped"),
    KEYED("keyed"),
    ON_FILE("on-file"),
    CONTACTLESS("contactless");

    public final String value;

    private OrderTendersCardEntryMethodEnum(String value) {
        this.value = value;
    }
}
