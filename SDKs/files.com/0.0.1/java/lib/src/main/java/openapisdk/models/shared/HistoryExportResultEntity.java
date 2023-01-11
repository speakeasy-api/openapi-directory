package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HistoryExportResultEntity
 * List History Export Results
**/
public class HistoryExportResultEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public String action;
    public HistoryExportResultEntity withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public Integer createdAt;
    public HistoryExportResultEntity withCreatedAt(Integer createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public String destination;
    public HistoryExportResultEntity withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failure_type")
    public String failureType;
    public HistoryExportResultEntity withFailureType(String failureType) {
        this.failureType = failureType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_id")
    public Integer fileId;
    public HistoryExportResultEntity withFileId(Integer fileId) {
        this.fileId = fileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("folder")
    public String folder;
    public HistoryExportResultEntity withFolder(String folder) {
        this.folder = folder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public HistoryExportResultEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interface")
    public String interface_;
    public HistoryExportResultEntity withInterface(String interface_) {
        this.interface_ = interface_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public String ip;
    public HistoryExportResultEntity withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_id")
    public Integer parentId;
    public HistoryExportResultEntity withParentId(Integer parentId) {
        this.parentId = parentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public HistoryExportResultEntity withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("src")
    public String src;
    public HistoryExportResultEntity withSrc(String src) {
        this.src = src;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_expires_at")
    public Integer targetExpiresAt;
    public HistoryExportResultEntity withTargetExpiresAt(Integer targetExpiresAt) {
        this.targetExpiresAt = targetExpiresAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_id")
    public Integer targetId;
    public HistoryExportResultEntity withTargetId(Integer targetId) {
        this.targetId = targetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_name")
    public String targetName;
    public HistoryExportResultEntity withTargetName(String targetName) {
        this.targetName = targetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_permission")
    public String targetPermission;
    public HistoryExportResultEntity withTargetPermission(String targetPermission) {
        this.targetPermission = targetPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_permission_set")
    public String targetPermissionSet;
    public HistoryExportResultEntity withTargetPermissionSet(String targetPermissionSet) {
        this.targetPermissionSet = targetPermissionSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_platform")
    public String targetPlatform;
    public HistoryExportResultEntity withTargetPlatform(String targetPlatform) {
        this.targetPlatform = targetPlatform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_recursive")
    public Boolean targetRecursive;
    public HistoryExportResultEntity withTargetRecursive(Boolean targetRecursive) {
        this.targetRecursive = targetRecursive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_user_id")
    public Integer targetUserId;
    public HistoryExportResultEntity withTargetUserId(Integer targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_username")
    public String targetUsername;
    public HistoryExportResultEntity withTargetUsername(String targetUsername) {
        this.targetUsername = targetUsername;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public Integer userId;
    public HistoryExportResultEntity withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public HistoryExportResultEntity withUsername(String username) {
        this.username = username;
        return this;
    }
}