package openapisdk.models.shared;



/**
 * CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions
 * The market (purchasing) option for the instances.
**/
public class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions {
    public java.util.Map<String, Object> marketType;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions withMarketType(java.util.Map<String, Object> marketType) {
        this.marketType = marketType;
        return this;
    }
    public CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions spotOptions;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions withSpotOptions(CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions spotOptions) {
        this.spotOptions = spotOptions;
        return this;
    }
}