package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDbClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteDbClusterActionEnum action;
    public PostDeleteDbClusterQueryParams withAction(PostDeleteDbClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteDbClusterVersionEnum version;
    public PostDeleteDbClusterQueryParams withVersion(PostDeleteDbClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}