package openapisdk.models.shared;


public enum ItemPricingTypeEnum {
    FIXED("fixed"),
    VARIABLE("variable"),
    PER_UNIT("per_unit"),
    OTHER("other");

    public final String value;

    private ItemPricingTypeEnum(String value) {
        this.value = value;
    }
}
