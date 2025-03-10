/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * NotificationEntity - List Notifications
 */
public class NotificationEntity {
    /**
     * Notification group id
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_id")
    public Integer groupId;

    public NotificationEntity withGroupId(Integer groupId) {
        this.groupId = groupId;
        return this;
    }
    
    /**
     * Group name if applicable
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_name")
    public String groupName;

    public NotificationEntity withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    
    /**
     * Notification ID
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;

    public NotificationEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    
    /**
     * Custom message to include in notification emails.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;

    public NotificationEntity withMessage(String message) {
        this.message = message;
        return this;
    }
    
    /**
     * Triggers notification when copying files to this path
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notify_on_copy")
    public Boolean notifyOnCopy;

    public NotificationEntity withNotifyOnCopy(Boolean notifyOnCopy) {
        this.notifyOnCopy = notifyOnCopy;
        return this;
    }
    
    /**
     * Triggers notification when deleting files from this path
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notify_on_delete")
    public Boolean notifyOnDelete;

    public NotificationEntity withNotifyOnDelete(Boolean notifyOnDelete) {
        this.notifyOnDelete = notifyOnDelete;
        return this;
    }
    
    /**
     * Triggers notification when downloading files from this path
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notify_on_download")
    public Boolean notifyOnDownload;

    public NotificationEntity withNotifyOnDownload(Boolean notifyOnDownload) {
        this.notifyOnDownload = notifyOnDownload;
        return this;
    }
    
    /**
     * Triggers notification when moving files to this path
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notify_on_move")
    public Boolean notifyOnMove;

    public NotificationEntity withNotifyOnMove(Boolean notifyOnMove) {
        this.notifyOnMove = notifyOnMove;
        return this;
    }
    
    /**
     * Triggers notification when uploading new files to this path
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notify_on_upload")
    public Boolean notifyOnUpload;

    public NotificationEntity withNotifyOnUpload(Boolean notifyOnUpload) {
        this.notifyOnUpload = notifyOnUpload;
        return this;
    }
    
    /**
     * Trigger notification on notification user actions?
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notify_user_actions")
    public Boolean notifyUserActions;

    public NotificationEntity withNotifyUserActions(Boolean notifyUserActions) {
        this.notifyUserActions = notifyUserActions;
        return this;
    }
    
    /**
     * Folder path to notify on
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;

    public NotificationEntity withPath(String path) {
        this.path = path;
        return this;
    }
    
    /**
     * Enable notifications for each subfolder in this path
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recursive")
    public Boolean recursive;

    public NotificationEntity withRecursive(Boolean recursive) {
        this.recursive = recursive;
        return this;
    }
    
    /**
     * The time interval that notifications are aggregated to
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("send_interval")
    public NotificationEntitySendIntervalEnum sendInterval;

    public NotificationEntity withSendInterval(NotificationEntitySendIntervalEnum sendInterval) {
        this.sendInterval = sendInterval;
        return this;
    }
    
    /**
     * If true, it means that the recipient at this user's email address has manually unsubscribed from all emails, or had their email "hard bounce", which means that we are unable to send mail to this user's current email address. Notifications will resume if the user changes their email address.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suppressed_email")
    public Boolean suppressedEmail;

    public NotificationEntity withSuppressedEmail(Boolean suppressedEmail) {
        this.suppressedEmail = suppressedEmail;
        return this;
    }
    
    /**
     * Notify when actions are performed by a share recipient?
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trigger_by_share_recipients")
    public Boolean triggerByShareRecipients;

    public NotificationEntity withTriggerByShareRecipients(Boolean triggerByShareRecipients) {
        this.triggerByShareRecipients = triggerByShareRecipients;
        return this;
    }
    
    /**
     * Array of filenames (possibly with wildcards) to match for action path
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggering_filenames")
    public String[] triggeringFilenames;

    public NotificationEntity withTriggeringFilenames(String[] triggeringFilenames) {
        this.triggeringFilenames = triggeringFilenames;
        return this;
    }
    
    /**
     * Only notify on actions made by a member of one of the specified groups
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggering_group_ids")
    public Integer[] triggeringGroupIds;

    public NotificationEntity withTriggeringGroupIds(Integer[] triggeringGroupIds) {
        this.triggeringGroupIds = triggeringGroupIds;
        return this;
    }
    
    /**
     * Only notify on actions made one of the specified users
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggering_user_ids")
    public Integer[] triggeringUserIds;

    public NotificationEntity withTriggeringUserIds(Integer[] triggeringUserIds) {
        this.triggeringUserIds = triggeringUserIds;
        return this;
    }
    
    /**
     * Is the user unsubscribed from this notification?
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unsubscribed")
    public Boolean unsubscribed;

    public NotificationEntity withUnsubscribed(Boolean unsubscribed) {
        this.unsubscribed = unsubscribed;
        return this;
    }
    
    /**
     * The reason that the user unsubscribed
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unsubscribed_reason")
    public NotificationEntityUnsubscribedReasonEnum unsubscribedReason;

    public NotificationEntity withUnsubscribedReason(NotificationEntityUnsubscribedReasonEnum unsubscribedReason) {
        this.unsubscribedReason = unsubscribedReason;
        return this;
    }
    
    /**
     * Notification user ID
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public Integer userId;

    public NotificationEntity withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
    
    /**
     * Notification username
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;

    public NotificationEntity withUsername(String username) {
        this.username = username;
        return this;
    }
    
    public NotificationEntity(){}
}
