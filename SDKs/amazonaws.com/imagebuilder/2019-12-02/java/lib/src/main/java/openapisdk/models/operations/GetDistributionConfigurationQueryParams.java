package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDistributionConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=distributionConfigurationArn")
    public String distributionConfigurationArn;
    public GetDistributionConfigurationQueryParams withDistributionConfigurationArn(String distributionConfigurationArn) {
        this.distributionConfigurationArn = distributionConfigurationArn;
        return this;
    }
}