package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStopDbClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostStopDbClusterActionEnum action;
    public PostStopDbClusterQueryParams withAction(PostStopDbClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostStopDbClusterVersionEnum version;
    public PostStopDbClusterQueryParams withVersion(PostStopDbClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}