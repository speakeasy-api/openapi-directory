package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNotificationsRequestBody {
    @SpeakeasyMetadata("multipartForm:name=group_id")
    public Integer groupId;
    public PostNotificationsRequestBody withGroupId(Integer groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=notify_on_copy")
    public Boolean notifyOnCopy;
    public PostNotificationsRequestBody withNotifyOnCopy(Boolean notifyOnCopy) {
        this.notifyOnCopy = notifyOnCopy;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=notify_user_actions")
    public Boolean notifyUserActions;
    public PostNotificationsRequestBody withNotifyUserActions(Boolean notifyUserActions) {
        this.notifyUserActions = notifyUserActions;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=path")
    public String path;
    public PostNotificationsRequestBody withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=recursive")
    public Boolean recursive;
    public PostNotificationsRequestBody withRecursive(Boolean recursive) {
        this.recursive = recursive;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=send_interval")
    public String sendInterval;
    public PostNotificationsRequestBody withSendInterval(String sendInterval) {
        this.sendInterval = sendInterval;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_id")
    public Integer userId;
    public PostNotificationsRequestBody withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=username")
    public String username;
    public PostNotificationsRequestBody withUsername(String username) {
        this.username = username;
        return this;
    }
}