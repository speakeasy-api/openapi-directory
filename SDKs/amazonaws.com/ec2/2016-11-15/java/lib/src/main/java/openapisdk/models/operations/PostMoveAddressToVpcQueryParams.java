package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMoveAddressToVpcQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostMoveAddressToVpcActionEnum action;
    public PostMoveAddressToVpcQueryParams withAction(PostMoveAddressToVpcActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostMoveAddressToVpcVersionEnum version;
    public PostMoveAddressToVpcQueryParams withVersion(PostMoveAddressToVpcVersionEnum version) {
        this.version = version;
        return this;
    }
}