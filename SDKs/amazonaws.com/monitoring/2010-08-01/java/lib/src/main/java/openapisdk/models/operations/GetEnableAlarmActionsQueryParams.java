package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnableAlarmActionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetEnableAlarmActionsActionEnum action;
    public GetEnableAlarmActionsQueryParams withAction(GetEnableAlarmActionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AlarmNames")
    public String[] alarmNames;
    public GetEnableAlarmActionsQueryParams withAlarmNames(String[] alarmNames) {
        this.alarmNames = alarmNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetEnableAlarmActionsVersionEnum version;
    public GetEnableAlarmActionsQueryParams withVersion(GetEnableAlarmActionsVersionEnum version) {
        this.version = version;
        return this;
    }
}