package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSuspendProcessesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSuspendProcessesActionEnum action;
    public PostSuspendProcessesQueryParams withAction(PostSuspendProcessesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSuspendProcessesVersionEnum version;
    public PostSuspendProcessesQueryParams withVersion(PostSuspendProcessesVersionEnum version) {
        this.version = version;
        return this;
    }
}