package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDomainConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domainConfigurationName")
    public String domainConfigurationName;
    public UpdateDomainConfigurationPathParams withDomainConfigurationName(String domainConfigurationName) {
        this.domainConfigurationName = domainConfigurationName;
        return this;
    }
}