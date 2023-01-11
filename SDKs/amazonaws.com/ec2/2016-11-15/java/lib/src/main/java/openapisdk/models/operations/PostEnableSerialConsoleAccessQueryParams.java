package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableSerialConsoleAccessQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostEnableSerialConsoleAccessActionEnum action;
    public PostEnableSerialConsoleAccessQueryParams withAction(PostEnableSerialConsoleAccessActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostEnableSerialConsoleAccessVersionEnum version;
    public PostEnableSerialConsoleAccessQueryParams withVersion(PostEnableSerialConsoleAccessVersionEnum version) {
        this.version = version;
        return this;
    }
}