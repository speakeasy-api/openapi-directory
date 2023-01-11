package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetAlarmStateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetSetAlarmStateActionEnum action;
    public GetSetAlarmStateQueryParams withAction(GetSetAlarmStateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AlarmName")
    public String alarmName;
    public GetSetAlarmStateQueryParams withAlarmName(String alarmName) {
        this.alarmName = alarmName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StateReason")
    public String stateReason;
    public GetSetAlarmStateQueryParams withStateReason(String stateReason) {
        this.stateReason = stateReason;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StateReasonData")
    public String stateReasonData;
    public GetSetAlarmStateQueryParams withStateReasonData(String stateReasonData) {
        this.stateReasonData = stateReasonData;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StateValue")
    public GetSetAlarmStateStateValueEnum stateValue;
    public GetSetAlarmStateQueryParams withStateValue(GetSetAlarmStateStateValueEnum stateValue) {
        this.stateValue = stateValue;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetSetAlarmStateVersionEnum version;
    public GetSetAlarmStateQueryParams withVersion(GetSetAlarmStateVersionEnum version) {
        this.version = version;
        return this;
    }
}