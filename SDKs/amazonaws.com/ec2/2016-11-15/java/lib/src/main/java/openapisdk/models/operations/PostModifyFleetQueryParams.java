package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyFleetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyFleetActionEnum action;
    public PostModifyFleetQueryParams withAction(PostModifyFleetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyFleetVersionEnum version;
    public PostModifyFleetQueryParams withVersion(PostModifyFleetVersionEnum version) {
        this.version = version;
        return this;
    }
}