package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBacktrackDbClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostBacktrackDbClusterActionEnum action;
    public PostBacktrackDbClusterQueryParams withAction(PostBacktrackDbClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostBacktrackDbClusterVersionEnum version;
    public PostBacktrackDbClusterQueryParams withVersion(PostBacktrackDbClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}