package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRequestSpotFleetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRequestSpotFleetActionEnum action;
    public PostRequestSpotFleetQueryParams withAction(PostRequestSpotFleetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRequestSpotFleetVersionEnum version;
    public PostRequestSpotFleetQueryParams withVersion(PostRequestSpotFleetVersionEnum version) {
        this.version = version;
        return this;
    }
}