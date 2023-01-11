package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableSerialConsoleAccessQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisableSerialConsoleAccessActionEnum action;
    public PostDisableSerialConsoleAccessQueryParams withAction(PostDisableSerialConsoleAccessActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisableSerialConsoleAccessVersionEnum version;
    public PostDisableSerialConsoleAccessQueryParams withVersion(PostDisableSerialConsoleAccessVersionEnum version) {
        this.version = version;
        return this;
    }
}