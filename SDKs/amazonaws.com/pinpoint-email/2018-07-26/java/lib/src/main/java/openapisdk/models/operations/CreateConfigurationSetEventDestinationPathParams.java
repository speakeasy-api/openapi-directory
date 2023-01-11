package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConfigurationSetEventDestinationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConfigurationSetName")
    public String configurationSetName;
    public CreateConfigurationSetEventDestinationPathParams withConfigurationSetName(String configurationSetName) {
        this.configurationSetName = configurationSetName;
        return this;
    }
}