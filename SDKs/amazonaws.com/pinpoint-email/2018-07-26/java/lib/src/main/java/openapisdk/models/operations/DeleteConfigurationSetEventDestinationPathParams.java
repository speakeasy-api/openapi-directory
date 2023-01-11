package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteConfigurationSetEventDestinationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConfigurationSetName")
    public String configurationSetName;
    public DeleteConfigurationSetEventDestinationPathParams withConfigurationSetName(String configurationSetName) {
        this.configurationSetName = configurationSetName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EventDestinationName")
    public String eventDestinationName;
    public DeleteConfigurationSetEventDestinationPathParams withEventDestinationName(String eventDestinationName) {
        this.eventDestinationName = eventDestinationName;
        return this;
    }
}