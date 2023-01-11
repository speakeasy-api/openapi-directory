package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStartDbClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostStartDbClusterActionEnum action;
    public PostStartDbClusterQueryParams withAction(PostStartDbClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostStartDbClusterVersionEnum version;
    public PostStartDbClusterQueryParams withVersion(PostStartDbClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}