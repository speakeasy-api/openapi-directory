package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDbInstanceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyDbInstanceActionEnum action;
    public PostModifyDbInstanceQueryParams withAction(PostModifyDbInstanceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyDbInstanceVersionEnum version;
    public PostModifyDbInstanceQueryParams withVersion(PostModifyDbInstanceVersionEnum version) {
        this.version = version;
        return this;
    }
}