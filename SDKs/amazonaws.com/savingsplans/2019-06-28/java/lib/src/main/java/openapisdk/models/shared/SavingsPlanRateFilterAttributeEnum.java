package openapisdk.models.shared;


public enum SavingsPlanRateFilterAttributeEnum {
    REGION("region"),
    INSTANCE_FAMILY("instanceFamily"),
    INSTANCE_TYPE("instanceType"),
    PRODUCT_DESCRIPTION("productDescription"),
    TENANCY("tenancy"),
    PRODUCT_ID("productId");

    public final String value;

    private SavingsPlanRateFilterAttributeEnum(String value) {
        this.value = value;
    }
}
