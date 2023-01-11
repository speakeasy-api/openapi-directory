package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConfigurationSetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConfigurationSetName")
    public String configurationSetName;
    public GetConfigurationSetPathParams withConfigurationSetName(String configurationSetName) {
        this.configurationSetName = configurationSetName;
        return this;
    }
}