package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteAlarmsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteAlarmsActionEnum action;
    public GetDeleteAlarmsQueryParams withAction(GetDeleteAlarmsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AlarmNames")
    public String[] alarmNames;
    public GetDeleteAlarmsQueryParams withAlarmNames(String[] alarmNames) {
        this.alarmNames = alarmNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteAlarmsVersionEnum version;
    public GetDeleteAlarmsQueryParams withVersion(GetDeleteAlarmsVersionEnum version) {
        this.version = version;
        return this;
    }
}