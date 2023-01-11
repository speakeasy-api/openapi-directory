package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDistributionConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=distributionConfigurationArn")
    public String distributionConfigurationArn;
    public DeleteDistributionConfigurationQueryParams withDistributionConfigurationArn(String distributionConfigurationArn) {
        this.distributionConfigurationArn = distributionConfigurationArn;
        return this;
    }
}