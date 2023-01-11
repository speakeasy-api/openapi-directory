package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyInstancePlacementQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyInstancePlacementActionEnum action;
    public PostModifyInstancePlacementQueryParams withAction(PostModifyInstancePlacementActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyInstancePlacementVersionEnum version;
    public PostModifyInstancePlacementQueryParams withVersion(PostModifyInstancePlacementVersionEnum version) {
        this.version = version;
        return this;
    }
}