package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateConfigurationSetTrackingOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateConfigurationSetTrackingOptionsActionEnum action;
    public GetUpdateConfigurationSetTrackingOptionsQueryParams withAction(GetUpdateConfigurationSetTrackingOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ConfigurationSetName")
    public String configurationSetName;
    public GetUpdateConfigurationSetTrackingOptionsQueryParams withConfigurationSetName(String configurationSetName) {
        this.configurationSetName = configurationSetName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TrackingOptions")
    public GetUpdateConfigurationSetTrackingOptionsTrackingOptions trackingOptions;
    public GetUpdateConfigurationSetTrackingOptionsQueryParams withTrackingOptions(GetUpdateConfigurationSetTrackingOptionsTrackingOptions trackingOptions) {
        this.trackingOptions = trackingOptions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateConfigurationSetTrackingOptionsVersionEnum version;
    public GetUpdateConfigurationSetTrackingOptionsQueryParams withVersion(GetUpdateConfigurationSetTrackingOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}