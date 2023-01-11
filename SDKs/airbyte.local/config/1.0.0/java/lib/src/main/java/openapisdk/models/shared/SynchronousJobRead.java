package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SynchronousJobRead {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configId")
    public String configId;
    public SynchronousJobRead withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
    @JsonProperty("configType")
    public JobConfigTypeEnum configType;
    public SynchronousJobRead withConfigType(JobConfigTypeEnum configType) {
        this.configType = configType;
        return this;
    }
    @JsonProperty("createdAt")
    public Long createdAt;
    public SynchronousJobRead withCreatedAt(Long createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("endedAt")
    public Long endedAt;
    public SynchronousJobRead withEndedAt(Long endedAt) {
        this.endedAt = endedAt;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public SynchronousJobRead withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logs")
    public LogRead logs;
    public SynchronousJobRead withLogs(LogRead logs) {
        this.logs = logs;
        return this;
    }
    @JsonProperty("succeeded")
    public Boolean succeeded;
    public SynchronousJobRead withSucceeded(Boolean succeeded) {
        this.succeeded = succeeded;
        return this;
    }
}