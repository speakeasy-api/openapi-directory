package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableLoggingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisableLoggingActionEnum action;
    public PostDisableLoggingQueryParams withAction(PostDisableLoggingActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisableLoggingVersionEnum version;
    public PostDisableLoggingQueryParams withVersion(PostDisableLoggingVersionEnum version) {
        this.version = version;
        return this;
    }
}