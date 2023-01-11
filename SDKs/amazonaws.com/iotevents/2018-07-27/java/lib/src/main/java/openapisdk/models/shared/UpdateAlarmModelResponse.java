package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class UpdateAlarmModelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alarmModelArn")
    public String alarmModelArn;
    public UpdateAlarmModelResponse withAlarmModelArn(String alarmModelArn) {
        this.alarmModelArn = alarmModelArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alarmModelVersion")
    public String alarmModelVersion;
    public UpdateAlarmModelResponse withAlarmModelVersion(String alarmModelVersion) {
        this.alarmModelVersion = alarmModelVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationTime")
    public OffsetDateTime creationTime;
    public UpdateAlarmModelResponse withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdateTime")
    public OffsetDateTime lastUpdateTime;
    public UpdateAlarmModelResponse withLastUpdateTime(OffsetDateTime lastUpdateTime) {
        this.lastUpdateTime = lastUpdateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AlarmModelVersionStatusEnum status;
    public UpdateAlarmModelResponse withStatus(AlarmModelVersionStatusEnum status) {
        this.status = status;
        return this;
    }
}