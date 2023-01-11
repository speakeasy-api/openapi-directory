package openapisdk.models.operations;


public enum UpdateTrackerRequestBodyPricingPlanEnum {
    REQUEST_BASED_USAGE("RequestBasedUsage"),
    MOBILE_ASSET_TRACKING("MobileAssetTracking"),
    MOBILE_ASSET_MANAGEMENT("MobileAssetManagement");

    public final String value;

    private UpdateTrackerRequestBodyPricingPlanEnum(String value) {
        this.value = value;
    }
}
