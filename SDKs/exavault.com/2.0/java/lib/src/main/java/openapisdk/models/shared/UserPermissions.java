package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserPermissions {
    @JsonProperty("changePassword")
    public Boolean changePassword;
    public UserPermissions withChangePassword(Boolean changePassword) {
        this.changePassword = changePassword;
        return this;
    }
    @JsonProperty("delete")
    public Boolean delete;
    public UserPermissions withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
    @JsonProperty("deleteFormData")
    public Boolean deleteFormData;
    public UserPermissions withDeleteFormData(Boolean deleteFormData) {
        this.deleteFormData = deleteFormData;
        return this;
    }
    @JsonProperty("download")
    public Boolean download;
    public UserPermissions withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonProperty("list")
    public Boolean list;
    public UserPermissions withList(Boolean list) {
        this.list = list;
        return this;
    }
    @JsonProperty("modify")
    public Boolean modify;
    public UserPermissions withModify(Boolean modify) {
        this.modify = modify;
        return this;
    }
    @JsonProperty("notification")
    public Boolean notification;
    public UserPermissions withNotification(Boolean notification) {
        this.notification = notification;
        return this;
    }
    @JsonProperty("share")
    public Boolean share;
    public UserPermissions withShare(Boolean share) {
        this.share = share;
        return this;
    }
    @JsonProperty("upload")
    public Boolean upload;
    public UserPermissions withUpload(Boolean upload) {
        this.upload = upload;
        return this;
    }
    @JsonProperty("viewFormData")
    public Boolean viewFormData;
    public UserPermissions withViewFormData(Boolean viewFormData) {
        this.viewFormData = viewFormData;
        return this;
    }
}