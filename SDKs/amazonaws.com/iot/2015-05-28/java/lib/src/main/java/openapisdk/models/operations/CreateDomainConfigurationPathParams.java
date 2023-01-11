package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDomainConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domainConfigurationName")
    public String domainConfigurationName;
    public CreateDomainConfigurationPathParams withDomainConfigurationName(String domainConfigurationName) {
        this.domainConfigurationName = domainConfigurationName;
        return this;
    }
}