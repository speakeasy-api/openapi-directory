package openapisdk.models.shared;


public enum UnitPriceTypeEnum {
    GROSS("gross"),
    NET("net");

    public final String value;

    private UnitPriceTypeEnum(String value) {
        this.value = value;
    }
}
