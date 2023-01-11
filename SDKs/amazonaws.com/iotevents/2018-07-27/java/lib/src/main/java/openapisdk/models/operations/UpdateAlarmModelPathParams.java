package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAlarmModelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=alarmModelName")
    public String alarmModelName;
    public UpdateAlarmModelPathParams withAlarmModelName(String alarmModelName) {
        this.alarmModelName = alarmModelName;
        return this;
    }
}