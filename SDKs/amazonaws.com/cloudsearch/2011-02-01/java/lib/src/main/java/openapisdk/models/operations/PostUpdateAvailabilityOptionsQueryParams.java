package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateAvailabilityOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateAvailabilityOptionsActionEnum action;
    public PostUpdateAvailabilityOptionsQueryParams withAction(PostUpdateAvailabilityOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateAvailabilityOptionsVersionEnum version;
    public PostUpdateAvailabilityOptionsQueryParams withVersion(PostUpdateAvailabilityOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}