package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRebootClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRebootClusterActionEnum action;
    public PostRebootClusterQueryParams withAction(PostRebootClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRebootClusterVersionEnum version;
    public PostRebootClusterQueryParams withVersion(PostRebootClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}