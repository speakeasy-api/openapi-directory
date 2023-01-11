package openapisdk.models.operations;


public enum CreateRouteCalculatorRequestBodyPricingPlanEnum {
    REQUEST_BASED_USAGE("RequestBasedUsage"),
    MOBILE_ASSET_TRACKING("MobileAssetTracking"),
    MOBILE_ASSET_MANAGEMENT("MobileAssetManagement");

    public final String value;

    private CreateRouteCalculatorRequestBodyPricingPlanEnum(String value) {
        this.value = value;
    }
}
