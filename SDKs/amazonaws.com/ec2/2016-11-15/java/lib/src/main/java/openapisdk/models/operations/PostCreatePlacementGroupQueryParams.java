package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreatePlacementGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreatePlacementGroupActionEnum action;
    public PostCreatePlacementGroupQueryParams withAction(PostCreatePlacementGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreatePlacementGroupVersionEnum version;
    public PostCreatePlacementGroupQueryParams withVersion(PostCreatePlacementGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}