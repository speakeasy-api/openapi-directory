package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchNotificationsIdRequestBody {
    @SpeakeasyMetadata("multipartForm:name=notify_on_copy")
    public Boolean notifyOnCopy;
    public PatchNotificationsIdRequestBody withNotifyOnCopy(Boolean notifyOnCopy) {
        this.notifyOnCopy = notifyOnCopy;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=notify_user_actions")
    public Boolean notifyUserActions;
    public PatchNotificationsIdRequestBody withNotifyUserActions(Boolean notifyUserActions) {
        this.notifyUserActions = notifyUserActions;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=recursive")
    public Boolean recursive;
    public PatchNotificationsIdRequestBody withRecursive(Boolean recursive) {
        this.recursive = recursive;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=send_interval")
    public String sendInterval;
    public PatchNotificationsIdRequestBody withSendInterval(String sendInterval) {
        this.sendInterval = sendInterval;
        return this;
    }
}