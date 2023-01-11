package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAlarmModelVersionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=alarmModelName")
    public String alarmModelName;
    public ListAlarmModelVersionsPathParams withAlarmModelName(String alarmModelName) {
        this.alarmModelName = alarmModelName;
        return this;
    }
}