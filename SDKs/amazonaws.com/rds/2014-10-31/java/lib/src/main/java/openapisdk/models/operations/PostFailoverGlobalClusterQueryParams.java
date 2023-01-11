package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFailoverGlobalClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostFailoverGlobalClusterActionEnum action;
    public PostFailoverGlobalClusterQueryParams withAction(PostFailoverGlobalClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostFailoverGlobalClusterVersionEnum version;
    public PostFailoverGlobalClusterQueryParams withVersion(PostFailoverGlobalClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}