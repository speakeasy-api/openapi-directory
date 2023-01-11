package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateIncidentRecordRequestBody {
    @JsonProperty("arn")
    public String arn;
    public UpdateIncidentRecordRequestBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chatChannel")
    public UpdateIncidentRecordRequestBodyChatChannel chatChannel;
    public UpdateIncidentRecordRequestBody withChatChannel(UpdateIncidentRecordRequestBodyChatChannel chatChannel) {
        this.chatChannel = chatChannel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdateIncidentRecordRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impact")
    public Long impact;
    public UpdateIncidentRecordRequestBody withImpact(Long impact) {
        this.impact = impact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationTargets")
    public openapisdk.models.shared.NotificationTargetItem[] notificationTargets;
    public UpdateIncidentRecordRequestBody withNotificationTargets(openapisdk.models.shared.NotificationTargetItem[] notificationTargets) {
        this.notificationTargets = notificationTargets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public UpdateIncidentRecordRequestBodyStatusEnum status;
    public UpdateIncidentRecordRequestBody withStatus(UpdateIncidentRecordRequestBodyStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public String summary;
    public UpdateIncidentRecordRequestBody withSummary(String summary) {
        this.summary = summary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public UpdateIncidentRecordRequestBody withTitle(String title) {
        this.title = title;
        return this;
    }
}