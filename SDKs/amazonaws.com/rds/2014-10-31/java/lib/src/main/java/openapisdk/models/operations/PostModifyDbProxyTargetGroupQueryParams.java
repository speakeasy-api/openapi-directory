package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDbProxyTargetGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyDbProxyTargetGroupActionEnum action;
    public PostModifyDbProxyTargetGroupQueryParams withAction(PostModifyDbProxyTargetGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyDbProxyTargetGroupVersionEnum version;
    public PostModifyDbProxyTargetGroupQueryParams withVersion(PostModifyDbProxyTargetGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}