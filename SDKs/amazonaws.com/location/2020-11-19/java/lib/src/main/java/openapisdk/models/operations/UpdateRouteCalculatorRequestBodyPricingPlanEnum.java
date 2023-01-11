package openapisdk.models.operations;


public enum UpdateRouteCalculatorRequestBodyPricingPlanEnum {
    REQUEST_BASED_USAGE("RequestBasedUsage"),
    MOBILE_ASSET_TRACKING("MobileAssetTracking"),
    MOBILE_ASSET_MANAGEMENT("MobileAssetManagement");

    public final String value;

    private UpdateRouteCalculatorRequestBodyPricingPlanEnum(String value) {
        this.value = value;
    }
}
