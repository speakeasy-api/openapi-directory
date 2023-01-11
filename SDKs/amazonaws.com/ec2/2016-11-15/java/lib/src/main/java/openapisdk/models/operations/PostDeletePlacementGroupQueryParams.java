package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeletePlacementGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeletePlacementGroupActionEnum action;
    public PostDeletePlacementGroupQueryParams withAction(PostDeletePlacementGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeletePlacementGroupVersionEnum version;
    public PostDeletePlacementGroupQueryParams withVersion(PostDeletePlacementGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}