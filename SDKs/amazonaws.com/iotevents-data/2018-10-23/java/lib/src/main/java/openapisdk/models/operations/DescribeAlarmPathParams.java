package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAlarmPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=alarmModelName")
    public String alarmModelName;
    public DescribeAlarmPathParams withAlarmModelName(String alarmModelName) {
        this.alarmModelName = alarmModelName;
        return this;
    }
}