package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAlarmModelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alarmModelSummaries")
    public AlarmModelSummary[] alarmModelSummaries;
    public ListAlarmModelsResponse withAlarmModelSummaries(AlarmModelSummary[] alarmModelSummaries) {
        this.alarmModelSummaries = alarmModelSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAlarmModelsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}