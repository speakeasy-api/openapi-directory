package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LogStream
 * Represents a log stream, which is a sequence of log events from a single emitter of logs.
**/
public class LogStream {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public LogStream withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTime")
    public Long creationTime;
    public LogStream withCreationTime(Long creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstEventTimestamp")
    public Long firstEventTimestamp;
    public LogStream withFirstEventTimestamp(Long firstEventTimestamp) {
        this.firstEventTimestamp = firstEventTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastEventTimestamp")
    public Long lastEventTimestamp;
    public LogStream withLastEventTimestamp(Long lastEventTimestamp) {
        this.lastEventTimestamp = lastEventTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastIngestionTime")
    public Long lastIngestionTime;
    public LogStream withLastIngestionTime(Long lastIngestionTime) {
        this.lastIngestionTime = lastIngestionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logStreamName")
    public String logStreamName;
    public LogStream withLogStreamName(String logStreamName) {
        this.logStreamName = logStreamName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storedBytes")
    public java.util.Map<String, Object> storedBytes;
    public LogStream withStoredBytes(java.util.Map<String, Object> storedBytes) {
        this.storedBytes = storedBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploadSequenceToken")
    public String uploadSequenceToken;
    public LogStream withUploadSequenceToken(String uploadSequenceToken) {
        this.uploadSequenceToken = uploadSequenceToken;
        return this;
    }
}