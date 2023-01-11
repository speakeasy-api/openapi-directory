package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInfrastructureConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=infrastructureConfigurationArn")
    public String infrastructureConfigurationArn;
    public GetInfrastructureConfigurationQueryParams withInfrastructureConfigurationArn(String infrastructureConfigurationArn) {
        this.infrastructureConfigurationArn = infrastructureConfigurationArn;
        return this;
    }
}