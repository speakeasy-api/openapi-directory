package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeNotificationRuleResult {
    @JsonProperty("Arn")
    public String arn;
    public DescribeNotificationRuleResult withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedBy")
    public String createdBy;
    public DescribeNotificationRuleResult withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedTimestamp")
    public OffsetDateTime createdTimestamp;
    public DescribeNotificationRuleResult withCreatedTimestamp(OffsetDateTime createdTimestamp) {
        this.createdTimestamp = createdTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DetailType")
    public DetailTypeEnum detailType;
    public DescribeNotificationRuleResult withDetailType(DetailTypeEnum detailType) {
        this.detailType = detailType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventTypes")
    public EventTypeSummary[] eventTypes;
    public DescribeNotificationRuleResult withEventTypes(EventTypeSummary[] eventTypes) {
        this.eventTypes = eventTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedTimestamp")
    public OffsetDateTime lastModifiedTimestamp;
    public DescribeNotificationRuleResult withLastModifiedTimestamp(OffsetDateTime lastModifiedTimestamp) {
        this.lastModifiedTimestamp = lastModifiedTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public DescribeNotificationRuleResult withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Resource")
    public String resource;
    public DescribeNotificationRuleResult withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public NotificationRuleStatusEnum status;
    public DescribeNotificationRuleResult withStatus(NotificationRuleStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public DescribeNotificationRuleResult withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Targets")
    public TargetSummary[] targets;
    public DescribeNotificationRuleResult withTargets(TargetSummary[] targets) {
        this.targets = targets;
        return this;
    }
}