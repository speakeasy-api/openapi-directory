package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDomainConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domainConfigurationName")
    public String domainConfigurationName;
    public DescribeDomainConfigurationPathParams withDomainConfigurationName(String domainConfigurationName) {
        this.domainConfigurationName = domainConfigurationName;
        return this;
    }
}