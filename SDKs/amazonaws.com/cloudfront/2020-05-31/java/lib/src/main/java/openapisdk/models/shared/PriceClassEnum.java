package openapisdk.models.shared;


public enum PriceClassEnum {
    PRICE_CLASS100("PriceClass_100"),
    PRICE_CLASS200("PriceClass_200"),
    PRICE_CLASS_ALL("PriceClass_All");

    public final String value;

    private PriceClassEnum(String value) {
        this.value = value;
    }
}
