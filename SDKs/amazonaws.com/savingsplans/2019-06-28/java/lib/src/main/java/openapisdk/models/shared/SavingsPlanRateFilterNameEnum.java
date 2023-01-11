package openapisdk.models.shared;


public enum SavingsPlanRateFilterNameEnum {
    REGION("region"),
    INSTANCE_TYPE("instanceType"),
    PRODUCT_DESCRIPTION("productDescription"),
    TENANCY("tenancy"),
    PRODUCT_TYPE("productType"),
    SERVICE_CODE("serviceCode"),
    USAGE_TYPE("usageType"),
    OPERATION("operation");

    public final String value;

    private SavingsPlanRateFilterNameEnum(String value) {
        this.value = value;
    }
}
