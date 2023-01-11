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
 * LastCrawlInfo
 * Status and error information about the most recent crawl.
**/
public class LastCrawlInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public LastCrawlInfo withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogGroup")
    public String logGroup;
    public LastCrawlInfo withLogGroup(String logGroup) {
        this.logGroup = logGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogStream")
    public String logStream;
    public LastCrawlInfo withLogStream(String logStream) {
        this.logStream = logStream;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessagePrefix")
    public String messagePrefix;
    public LastCrawlInfo withMessagePrefix(String messagePrefix) {
        this.messagePrefix = messagePrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public LastCrawlInfo withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public LastCrawlStatusEnum status;
    public LastCrawlInfo withStatus(LastCrawlStatusEnum status) {
        this.status = status;
        return this;
    }
}