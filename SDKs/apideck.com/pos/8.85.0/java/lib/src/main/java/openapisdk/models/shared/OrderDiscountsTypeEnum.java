package openapisdk.models.shared;


public enum OrderDiscountsTypeEnum {
    PERCENTAGE("percentage"),
    FLAT_FEE("flat_fee");

    public final String value;

    private OrderDiscountsTypeEnum(String value) {
        this.value = value;
    }
}
