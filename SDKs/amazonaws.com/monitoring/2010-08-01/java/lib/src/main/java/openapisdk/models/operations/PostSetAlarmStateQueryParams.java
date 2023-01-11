package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetAlarmStateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSetAlarmStateActionEnum action;
    public PostSetAlarmStateQueryParams withAction(PostSetAlarmStateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSetAlarmStateVersionEnum version;
    public PostSetAlarmStateQueryParams withVersion(PostSetAlarmStateVersionEnum version) {
        this.version = version;
        return this;
    }
}