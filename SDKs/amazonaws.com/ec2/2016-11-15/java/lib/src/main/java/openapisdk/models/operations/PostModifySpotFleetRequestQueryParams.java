package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifySpotFleetRequestQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifySpotFleetRequestActionEnum action;
    public PostModifySpotFleetRequestQueryParams withAction(PostModifySpotFleetRequestActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifySpotFleetRequestVersionEnum version;
    public PostModifySpotFleetRequestQueryParams withVersion(PostModifySpotFleetRequestVersionEnum version) {
        this.version = version;
        return this;
    }
}