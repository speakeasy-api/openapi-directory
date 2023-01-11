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
 * LogSubscription
 * Represents a log subscription, which tracks real-time data from a chosen log group to a specified destination.
**/
public class LogSubscription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectoryId")
    public String directoryId;
    public LogSubscription withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogGroupName")
    public String logGroupName;
    public LogSubscription withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("SubscriptionCreatedDateTime")
    public OffsetDateTime subscriptionCreatedDateTime;
    public LogSubscription withSubscriptionCreatedDateTime(OffsetDateTime subscriptionCreatedDateTime) {
        this.subscriptionCreatedDateTime = subscriptionCreatedDateTime;
        return this;
    }
}