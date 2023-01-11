package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDisableAlarmActionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDisableAlarmActionsActionEnum action;
    public GetDisableAlarmActionsQueryParams withAction(GetDisableAlarmActionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AlarmNames")
    public String[] alarmNames;
    public GetDisableAlarmActionsQueryParams withAlarmNames(String[] alarmNames) {
        this.alarmNames = alarmNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDisableAlarmActionsVersionEnum version;
    public GetDisableAlarmActionsQueryParams withVersion(GetDisableAlarmActionsVersionEnum version) {
        this.version = version;
        return this;
    }
}