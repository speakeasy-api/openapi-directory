package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteConfigurationSetEventDestinationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteConfigurationSetEventDestinationActionEnum action;
    public GetDeleteConfigurationSetEventDestinationQueryParams withAction(GetDeleteConfigurationSetEventDestinationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ConfigurationSetName")
    public String configurationSetName;
    public GetDeleteConfigurationSetEventDestinationQueryParams withConfigurationSetName(String configurationSetName) {
        this.configurationSetName = configurationSetName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EventDestinationName")
    public String eventDestinationName;
    public GetDeleteConfigurationSetEventDestinationQueryParams withEventDestinationName(String eventDestinationName) {
        this.eventDestinationName = eventDestinationName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteConfigurationSetEventDestinationVersionEnum version;
    public GetDeleteConfigurationSetEventDestinationQueryParams withVersion(GetDeleteConfigurationSetEventDestinationVersionEnum version) {
        this.version = version;
        return this;
    }
}