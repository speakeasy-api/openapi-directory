package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetSerialConsoleAccessStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetSerialConsoleAccessStatusActionEnum action;
    public PostGetSerialConsoleAccessStatusQueryParams withAction(PostGetSerialConsoleAccessStatusActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetSerialConsoleAccessStatusVersionEnum version;
    public PostGetSerialConsoleAccessStatusQueryParams withVersion(PostGetSerialConsoleAccessStatusVersionEnum version) {
        this.version = version;
        return this;
    }
}