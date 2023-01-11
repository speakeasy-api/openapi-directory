package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFailoverDbClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostFailoverDbClusterActionEnum action;
    public PostFailoverDbClusterQueryParams withAction(PostFailoverDbClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostFailoverDbClusterVersionEnum version;
    public PostFailoverDbClusterQueryParams withVersion(PostFailoverDbClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}