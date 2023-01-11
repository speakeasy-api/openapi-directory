package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableLoggingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostEnableLoggingActionEnum action;
    public PostEnableLoggingQueryParams withAction(PostEnableLoggingActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostEnableLoggingVersionEnum version;
    public PostEnableLoggingQueryParams withVersion(PostEnableLoggingVersionEnum version) {
        this.version = version;
        return this;
    }
}