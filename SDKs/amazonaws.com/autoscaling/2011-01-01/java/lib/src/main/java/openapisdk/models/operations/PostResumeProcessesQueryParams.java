package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResumeProcessesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostResumeProcessesActionEnum action;
    public PostResumeProcessesQueryParams withAction(PostResumeProcessesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostResumeProcessesVersionEnum version;
    public PostResumeProcessesQueryParams withVersion(PostResumeProcessesVersionEnum version) {
        this.version = version;
        return this;
    }
}