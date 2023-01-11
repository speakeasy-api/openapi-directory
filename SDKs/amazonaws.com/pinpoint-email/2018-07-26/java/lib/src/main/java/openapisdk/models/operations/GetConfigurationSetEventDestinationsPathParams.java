package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConfigurationSetEventDestinationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConfigurationSetName")
    public String configurationSetName;
    public GetConfigurationSetEventDestinationsPathParams withConfigurationSetName(String configurationSetName) {
        this.configurationSetName = configurationSetName;
        return this;
    }
}