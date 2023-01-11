package openapisdk.models.shared;



/**
 * GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptions
 * The market (purchasing) option for the instances.
**/
public class GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptions {
    public java.util.Map<String, Object> marketType;
    public GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptions withMarketType(java.util.Map<String, Object> marketType) {
        this.marketType = marketType;
        return this;
    }
    public GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions spotOptions;
    public GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptions withSpotOptions(GetLaunchTemplateDataResultLaunchTemplateDataInstanceMarketOptionsSpotOptions spotOptions) {
        this.spotOptions = spotOptions;
        return this;
    }
}