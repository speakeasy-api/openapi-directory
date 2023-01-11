package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NotificationEntity
 * List Notifications
**/
public class NotificationEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_id")
    public Integer groupId;
    public NotificationEntity withGroupId(Integer groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_name")
    public String groupName;
    public NotificationEntity withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public NotificationEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notify_on_copy")
    public Boolean notifyOnCopy;
    public NotificationEntity withNotifyOnCopy(Boolean notifyOnCopy) {
        this.notifyOnCopy = notifyOnCopy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notify_user_actions")
    public Boolean notifyUserActions;
    public NotificationEntity withNotifyUserActions(Boolean notifyUserActions) {
        this.notifyUserActions = notifyUserActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public NotificationEntity withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recursive")
    public Boolean recursive;
    public NotificationEntity withRecursive(Boolean recursive) {
        this.recursive = recursive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("send_interval")
    public NotificationEntitySendIntervalEnum sendInterval;
    public NotificationEntity withSendInterval(NotificationEntitySendIntervalEnum sendInterval) {
        this.sendInterval = sendInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suppressed_email")
    public Boolean suppressedEmail;
    public NotificationEntity withSuppressedEmail(Boolean suppressedEmail) {
        this.suppressedEmail = suppressedEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unsubscribed")
    public Boolean unsubscribed;
    public NotificationEntity withUnsubscribed(Boolean unsubscribed) {
        this.unsubscribed = unsubscribed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unsubscribed_reason")
    public NotificationEntityUnsubscribedReasonEnum unsubscribedReason;
    public NotificationEntity withUnsubscribedReason(NotificationEntityUnsubscribedReasonEnum unsubscribedReason) {
        this.unsubscribedReason = unsubscribedReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public Integer userId;
    public NotificationEntity withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public NotificationEntity withUsername(String username) {
        this.username = username;
        return this;
    }
}