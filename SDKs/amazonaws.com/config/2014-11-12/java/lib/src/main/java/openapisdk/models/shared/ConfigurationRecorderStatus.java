package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ConfigurationRecorderStatus
 * The current status of the configuration recorder.
**/
public class ConfigurationRecorderStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastErrorCode")
    public String lastErrorCode;
    public ConfigurationRecorderStatus withLastErrorCode(String lastErrorCode) {
        this.lastErrorCode = lastErrorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastErrorMessage")
    public String lastErrorMessage;
    public ConfigurationRecorderStatus withLastErrorMessage(String lastErrorMessage) {
        this.lastErrorMessage = lastErrorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastStartTime")
    public OffsetDateTime lastStartTime;
    public ConfigurationRecorderStatus withLastStartTime(OffsetDateTime lastStartTime) {
        this.lastStartTime = lastStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastStatus")
    public RecorderStatusEnum lastStatus;
    public ConfigurationRecorderStatus withLastStatus(RecorderStatusEnum lastStatus) {
        this.lastStatus = lastStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastStatusChangeTime")
    public OffsetDateTime lastStatusChangeTime;
    public ConfigurationRecorderStatus withLastStatusChangeTime(OffsetDateTime lastStatusChangeTime) {
        this.lastStatusChangeTime = lastStatusChangeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastStopTime")
    public OffsetDateTime lastStopTime;
    public ConfigurationRecorderStatus withLastStopTime(OffsetDateTime lastStopTime) {
        this.lastStopTime = lastStopTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ConfigurationRecorderStatus withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording")
    public Boolean recording;
    public ConfigurationRecorderStatus withRecording(Boolean recording) {
        this.recording = recording;
        return this;
    }
}