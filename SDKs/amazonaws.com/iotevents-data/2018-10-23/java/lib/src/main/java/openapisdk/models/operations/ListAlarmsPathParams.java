package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAlarmsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=alarmModelName")
    public String alarmModelName;
    public ListAlarmsPathParams withAlarmModelName(String alarmModelName) {
        this.alarmModelName = alarmModelName;
        return this;
    }
}