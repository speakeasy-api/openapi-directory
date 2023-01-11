package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteInfrastructureConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=infrastructureConfigurationArn")
    public String infrastructureConfigurationArn;
    public DeleteInfrastructureConfigurationQueryParams withInfrastructureConfigurationArn(String infrastructureConfigurationArn) {
        this.infrastructureConfigurationArn = infrastructureConfigurationArn;
        return this;
    }
}