package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteConfigurationSetTrackingOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteConfigurationSetTrackingOptionsActionEnum action;
    public GetDeleteConfigurationSetTrackingOptionsQueryParams withAction(GetDeleteConfigurationSetTrackingOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ConfigurationSetName")
    public String configurationSetName;
    public GetDeleteConfigurationSetTrackingOptionsQueryParams withConfigurationSetName(String configurationSetName) {
        this.configurationSetName = configurationSetName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteConfigurationSetTrackingOptionsVersionEnum version;
    public GetDeleteConfigurationSetTrackingOptionsQueryParams withVersion(GetDeleteConfigurationSetTrackingOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}