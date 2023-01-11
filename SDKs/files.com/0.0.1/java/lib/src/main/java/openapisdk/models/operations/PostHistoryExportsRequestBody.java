package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class PostHistoryExportsRequestBody {
    @SpeakeasyMetadata("multipartForm:name=end_at")
    public OffsetDateTime endAt;
    public PostHistoryExportsRequestBody withEndAt(OffsetDateTime endAt) {
        this.endAt = endAt;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_action")
    public String queryAction;
    public PostHistoryExportsRequestBody withQueryAction(String queryAction) {
        this.queryAction = queryAction;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_destination")
    public String queryDestination;
    public PostHistoryExportsRequestBody withQueryDestination(String queryDestination) {
        this.queryDestination = queryDestination;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_failure_type")
    public String queryFailureType;
    public PostHistoryExportsRequestBody withQueryFailureType(String queryFailureType) {
        this.queryFailureType = queryFailureType;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_file_id")
    public String queryFileId;
    public PostHistoryExportsRequestBody withQueryFileId(String queryFileId) {
        this.queryFileId = queryFileId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_folder")
    public String queryFolder;
    public PostHistoryExportsRequestBody withQueryFolder(String queryFolder) {
        this.queryFolder = queryFolder;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_interface")
    public String queryInterface;
    public PostHistoryExportsRequestBody withQueryInterface(String queryInterface) {
        this.queryInterface = queryInterface;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_ip")
    public String queryIp;
    public PostHistoryExportsRequestBody withQueryIp(String queryIp) {
        this.queryIp = queryIp;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_parent_id")
    public String queryParentId;
    public PostHistoryExportsRequestBody withQueryParentId(String queryParentId) {
        this.queryParentId = queryParentId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_path")
    public String queryPath;
    public PostHistoryExportsRequestBody withQueryPath(String queryPath) {
        this.queryPath = queryPath;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_src")
    public String querySrc;
    public PostHistoryExportsRequestBody withQuerySrc(String querySrc) {
        this.querySrc = querySrc;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_target_id")
    public String queryTargetId;
    public PostHistoryExportsRequestBody withQueryTargetId(String queryTargetId) {
        this.queryTargetId = queryTargetId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_target_name")
    public String queryTargetName;
    public PostHistoryExportsRequestBody withQueryTargetName(String queryTargetName) {
        this.queryTargetName = queryTargetName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_target_permission")
    public String queryTargetPermission;
    public PostHistoryExportsRequestBody withQueryTargetPermission(String queryTargetPermission) {
        this.queryTargetPermission = queryTargetPermission;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_target_permission_set")
    public String queryTargetPermissionSet;
    public PostHistoryExportsRequestBody withQueryTargetPermissionSet(String queryTargetPermissionSet) {
        this.queryTargetPermissionSet = queryTargetPermissionSet;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_target_platform")
    public String queryTargetPlatform;
    public PostHistoryExportsRequestBody withQueryTargetPlatform(String queryTargetPlatform) {
        this.queryTargetPlatform = queryTargetPlatform;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_target_user_id")
    public String queryTargetUserId;
    public PostHistoryExportsRequestBody withQueryTargetUserId(String queryTargetUserId) {
        this.queryTargetUserId = queryTargetUserId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_target_username")
    public String queryTargetUsername;
    public PostHistoryExportsRequestBody withQueryTargetUsername(String queryTargetUsername) {
        this.queryTargetUsername = queryTargetUsername;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_user_id")
    public String queryUserId;
    public PostHistoryExportsRequestBody withQueryUserId(String queryUserId) {
        this.queryUserId = queryUserId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_username")
    public String queryUsername;
    public PostHistoryExportsRequestBody withQueryUsername(String queryUsername) {
        this.queryUsername = queryUsername;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=start_at")
    public OffsetDateTime startAt;
    public PostHistoryExportsRequestBody withStartAt(OffsetDateTime startAt) {
        this.startAt = startAt;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_id")
    public Integer userId;
    public PostHistoryExportsRequestBody withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}