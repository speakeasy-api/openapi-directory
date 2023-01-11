package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutConfigurationSetReputationOptionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConfigurationSetName")
    public String configurationSetName;
    public PutConfigurationSetReputationOptionsPathParams withConfigurationSetName(String configurationSetName) {
        this.configurationSetName = configurationSetName;
        return this;
    }
}