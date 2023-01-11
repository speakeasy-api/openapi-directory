package openapisdk.models.operations;


public enum UpdatePlaceIndexRequestBodyPricingPlanEnum {
    REQUEST_BASED_USAGE("RequestBasedUsage"),
    MOBILE_ASSET_TRACKING("MobileAssetTracking"),
    MOBILE_ASSET_MANAGEMENT("MobileAssetManagement");

    public final String value;

    private UpdatePlaceIndexRequestBodyPricingPlanEnum(String value) {
        this.value = value;
    }
}
