package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableAlarmActionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisableAlarmActionsActionEnum action;
    public PostDisableAlarmActionsQueryParams withAction(PostDisableAlarmActionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisableAlarmActionsVersionEnum version;
    public PostDisableAlarmActionsQueryParams withVersion(PostDisableAlarmActionsVersionEnum version) {
        this.version = version;
        return this;
    }
}