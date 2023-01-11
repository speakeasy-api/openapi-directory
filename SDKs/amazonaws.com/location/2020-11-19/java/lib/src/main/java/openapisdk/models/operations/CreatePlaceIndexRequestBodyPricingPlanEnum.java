package openapisdk.models.operations;


public enum CreatePlaceIndexRequestBodyPricingPlanEnum {
    REQUEST_BASED_USAGE("RequestBasedUsage"),
    MOBILE_ASSET_TRACKING("MobileAssetTracking"),
    MOBILE_ASSET_MANAGEMENT("MobileAssetManagement");

    public final String value;

    private CreatePlaceIndexRequestBodyPricingPlanEnum(String value) {
        this.value = value;
    }
}
