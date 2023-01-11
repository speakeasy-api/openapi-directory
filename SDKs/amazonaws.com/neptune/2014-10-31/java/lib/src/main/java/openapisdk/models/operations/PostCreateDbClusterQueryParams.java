package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDbClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateDbClusterActionEnum action;
    public PostCreateDbClusterQueryParams withAction(PostCreateDbClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateDbClusterVersionEnum version;
    public PostCreateDbClusterQueryParams withVersion(PostCreateDbClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}