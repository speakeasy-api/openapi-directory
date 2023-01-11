package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeAlarmsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeAlarmsActionEnum action;
    public GetDescribeAlarmsQueryParams withAction(GetDescribeAlarmsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ActionPrefix")
    public String actionPrefix;
    public GetDescribeAlarmsQueryParams withActionPrefix(String actionPrefix) {
        this.actionPrefix = actionPrefix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AlarmNamePrefix")
    public String alarmNamePrefix;
    public GetDescribeAlarmsQueryParams withAlarmNamePrefix(String alarmNamePrefix) {
        this.alarmNamePrefix = alarmNamePrefix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AlarmNames")
    public String[] alarmNames;
    public GetDescribeAlarmsQueryParams withAlarmNames(String[] alarmNames) {
        this.alarmNames = alarmNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AlarmTypes")
    public openapisdk.models.shared.AlarmTypeEnum[] alarmTypes;
    public GetDescribeAlarmsQueryParams withAlarmTypes(openapisdk.models.shared.AlarmTypeEnum[] alarmTypes) {
        this.alarmTypes = alarmTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ChildrenOfAlarmName")
    public String childrenOfAlarmName;
    public GetDescribeAlarmsQueryParams withChildrenOfAlarmName(String childrenOfAlarmName) {
        this.childrenOfAlarmName = childrenOfAlarmName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeAlarmsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetDescribeAlarmsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ParentsOfAlarmName")
    public String parentsOfAlarmName;
    public GetDescribeAlarmsQueryParams withParentsOfAlarmName(String parentsOfAlarmName) {
        this.parentsOfAlarmName = parentsOfAlarmName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StateValue")
    public GetDescribeAlarmsStateValueEnum stateValue;
    public GetDescribeAlarmsQueryParams withStateValue(GetDescribeAlarmsStateValueEnum stateValue) {
        this.stateValue = stateValue;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeAlarmsVersionEnum version;
    public GetDescribeAlarmsQueryParams withVersion(GetDescribeAlarmsVersionEnum version) {
        this.version = version;
        return this;
    }
}