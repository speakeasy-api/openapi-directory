package openapisdk.models.shared;



/**
 * GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions
 * The options for Spot Instances.
**/
public class GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions {
    public java.util.Map<String, Object> blockDurationMinutes;
    public GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions withBlockDurationMinutes(java.util.Map<String, Object> blockDurationMinutes) {
        this.blockDurationMinutes = blockDurationMinutes;
        return this;
    }
    public java.util.Map<String, Object> instanceInterruptionBehavior;
    public GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions withInstanceInterruptionBehavior(java.util.Map<String, Object> instanceInterruptionBehavior) {
        this.instanceInterruptionBehavior = instanceInterruptionBehavior;
        return this;
    }
    public java.util.Map<String, Object> maxPrice;
    public GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions withMaxPrice(java.util.Map<String, Object> maxPrice) {
        this.maxPrice = maxPrice;
        return this;
    }
    public java.util.Map<String, Object> spotInstanceType;
    public GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions withSpotInstanceType(java.util.Map<String, Object> spotInstanceType) {
        this.spotInstanceType = spotInstanceType;
        return this;
    }
    public java.util.Map<String, Object> validUntil;
    public GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions withValidUntil(java.util.Map<String, Object> validUntil) {
        this.validUntil = validUntil;
        return this;
    }
}