package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDbClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyDbClusterActionEnum action;
    public PostModifyDbClusterQueryParams withAction(PostModifyDbClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyDbClusterVersionEnum version;
    public PostModifyDbClusterQueryParams withVersion(PostModifyDbClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}