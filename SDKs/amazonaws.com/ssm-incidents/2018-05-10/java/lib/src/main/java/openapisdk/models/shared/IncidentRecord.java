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
 * IncidentRecord
 * The record of the incident that's created when an incident occurs.
**/
public class IncidentRecord {
    @JsonProperty("arn")
    public String arn;
    public IncidentRecord withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("automationExecutions")
    public AutomationExecution[] automationExecutions;
    public IncidentRecord withAutomationExecutions(AutomationExecution[] automationExecutions) {
        this.automationExecutions = automationExecutions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chatChannel")
    public ChatChannel chatChannel;
    public IncidentRecord withChatChannel(ChatChannel chatChannel) {
        this.chatChannel = chatChannel;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("creationTime")
    public OffsetDateTime creationTime;
    public IncidentRecord withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonProperty("dedupeString")
    public String dedupeString;
    public IncidentRecord withDedupeString(String dedupeString) {
        this.dedupeString = dedupeString;
        return this;
    }
    @JsonProperty("impact")
    public Long impact;
    public IncidentRecord withImpact(Long impact) {
        this.impact = impact;
        return this;
    }
    @JsonProperty("incidentRecordSource")
    public IncidentRecordSource incidentRecordSource;
    public IncidentRecord withIncidentRecordSource(IncidentRecordSource incidentRecordSource) {
        this.incidentRecordSource = incidentRecordSource;
        return this;
    }
    @JsonProperty("lastModifiedBy")
    public String lastModifiedBy;
    public IncidentRecord withLastModifiedBy(String lastModifiedBy) {
        this.lastModifiedBy = lastModifiedBy;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastModifiedTime")
    public OffsetDateTime lastModifiedTime;
    public IncidentRecord withLastModifiedTime(OffsetDateTime lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationTargets")
    public NotificationTargetItem[] notificationTargets;
    public IncidentRecord withNotificationTargets(NotificationTargetItem[] notificationTargets) {
        this.notificationTargets = notificationTargets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("resolvedTime")
    public OffsetDateTime resolvedTime;
    public IncidentRecord withResolvedTime(OffsetDateTime resolvedTime) {
        this.resolvedTime = resolvedTime;
        return this;
    }
    @JsonProperty("status")
    public IncidentRecordStatusEnum status;
    public IncidentRecord withStatus(IncidentRecordStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public String summary;
    public IncidentRecord withSummary(String summary) {
        this.summary = summary;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public IncidentRecord withTitle(String title) {
        this.title = title;
        return this;
    }
}