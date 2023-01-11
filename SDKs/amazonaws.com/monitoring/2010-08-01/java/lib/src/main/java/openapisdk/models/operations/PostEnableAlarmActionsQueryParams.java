package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableAlarmActionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostEnableAlarmActionsActionEnum action;
    public PostEnableAlarmActionsQueryParams withAction(PostEnableAlarmActionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostEnableAlarmActionsVersionEnum version;
    public PostEnableAlarmActionsQueryParams withVersion(PostEnableAlarmActionsVersionEnum version) {
        this.version = version;
        return this;
    }
}