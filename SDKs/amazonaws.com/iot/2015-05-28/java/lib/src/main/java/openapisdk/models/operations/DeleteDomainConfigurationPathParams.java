package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDomainConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domainConfigurationName")
    public String domainConfigurationName;
    public DeleteDomainConfigurationPathParams withDomainConfigurationName(String domainConfigurationName) {
        this.domainConfigurationName = domainConfigurationName;
        return this;
    }
}