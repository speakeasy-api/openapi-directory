package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAlarmModelVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alarmModelVersionSummaries")
    public AlarmModelVersionSummary[] alarmModelVersionSummaries;
    public ListAlarmModelVersionsResponse withAlarmModelVersionSummaries(AlarmModelVersionSummary[] alarmModelVersionSummaries) {
        this.alarmModelVersionSummaries = alarmModelVersionSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAlarmModelVersionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}