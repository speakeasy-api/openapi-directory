package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConfigurationSetEventDestinationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConfigurationSetName")
    public String configurationSetName;
    public UpdateConfigurationSetEventDestinationPathParams withConfigurationSetName(String configurationSetName) {
        this.configurationSetName = configurationSetName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EventDestinationName")
    public String eventDestinationName;
    public UpdateConfigurationSetEventDestinationPathParams withEventDestinationName(String eventDestinationName) {
        this.eventDestinationName = eventDestinationName;
        return this;
    }
}