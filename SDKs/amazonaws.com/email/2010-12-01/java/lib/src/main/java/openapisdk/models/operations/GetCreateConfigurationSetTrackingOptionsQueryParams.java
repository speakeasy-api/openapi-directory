package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateConfigurationSetTrackingOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateConfigurationSetTrackingOptionsActionEnum action;
    public GetCreateConfigurationSetTrackingOptionsQueryParams withAction(GetCreateConfigurationSetTrackingOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ConfigurationSetName")
    public String configurationSetName;
    public GetCreateConfigurationSetTrackingOptionsQueryParams withConfigurationSetName(String configurationSetName) {
        this.configurationSetName = configurationSetName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TrackingOptions")
    public GetCreateConfigurationSetTrackingOptionsTrackingOptions trackingOptions;
    public GetCreateConfigurationSetTrackingOptionsQueryParams withTrackingOptions(GetCreateConfigurationSetTrackingOptionsTrackingOptions trackingOptions) {
        this.trackingOptions = trackingOptions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateConfigurationSetTrackingOptionsVersionEnum version;
    public GetCreateConfigurationSetTrackingOptionsQueryParams withVersion(GetCreateConfigurationSetTrackingOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}