package openapisdk.models.shared;



/**
 * CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions
 * The options for Spot Instances.
**/
public class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions {
    public java.util.Map<String, Object> blockDurationMinutes;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions withBlockDurationMinutes(java.util.Map<String, Object> blockDurationMinutes) {
        this.blockDurationMinutes = blockDurationMinutes;
        return this;
    }
    public java.util.Map<String, Object> instanceInterruptionBehavior;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions withInstanceInterruptionBehavior(java.util.Map<String, Object> instanceInterruptionBehavior) {
        this.instanceInterruptionBehavior = instanceInterruptionBehavior;
        return this;
    }
    public java.util.Map<String, Object> maxPrice;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions withMaxPrice(java.util.Map<String, Object> maxPrice) {
        this.maxPrice = maxPrice;
        return this;
    }
    public java.util.Map<String, Object> spotInstanceType;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions withSpotInstanceType(java.util.Map<String, Object> spotInstanceType) {
        this.spotInstanceType = spotInstanceType;
        return this;
    }
    public java.util.Map<String, Object> validUntil;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions withValidUntil(java.util.Map<String, Object> validUntil) {
        this.validUntil = validUntil;
        return this;
    }
}