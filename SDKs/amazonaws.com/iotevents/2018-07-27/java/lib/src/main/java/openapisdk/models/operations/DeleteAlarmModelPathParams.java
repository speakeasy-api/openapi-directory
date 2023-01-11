package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAlarmModelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=alarmModelName")
    public String alarmModelName;
    public DeleteAlarmModelPathParams withAlarmModelName(String alarmModelName) {
        this.alarmModelName = alarmModelName;
        return this;
    }
}