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
 * HistoryExportEntity
 * Show History Export
**/
public class HistoryExportEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end_at")
    public OffsetDateTime endAt;
    public HistoryExportEntity withEndAt(OffsetDateTime endAt) {
        this.endAt = endAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("history_version")
    public String historyVersion;
    public HistoryExportEntity withHistoryVersion(String historyVersion) {
        this.historyVersion = historyVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public HistoryExportEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_action")
    public String queryAction;
    public HistoryExportEntity withQueryAction(String queryAction) {
        this.queryAction = queryAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_destination")
    public String queryDestination;
    public HistoryExportEntity withQueryDestination(String queryDestination) {
        this.queryDestination = queryDestination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_failure_type")
    public String queryFailureType;
    public HistoryExportEntity withQueryFailureType(String queryFailureType) {
        this.queryFailureType = queryFailureType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_file_id")
    public String queryFileId;
    public HistoryExportEntity withQueryFileId(String queryFileId) {
        this.queryFileId = queryFileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_folder")
    public String queryFolder;
    public HistoryExportEntity withQueryFolder(String queryFolder) {
        this.queryFolder = queryFolder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_interface")
    public String queryInterface;
    public HistoryExportEntity withQueryInterface(String queryInterface) {
        this.queryInterface = queryInterface;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_ip")
    public String queryIp;
    public HistoryExportEntity withQueryIp(String queryIp) {
        this.queryIp = queryIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_parent_id")
    public String queryParentId;
    public HistoryExportEntity withQueryParentId(String queryParentId) {
        this.queryParentId = queryParentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_path")
    public String queryPath;
    public HistoryExportEntity withQueryPath(String queryPath) {
        this.queryPath = queryPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_src")
    public String querySrc;
    public HistoryExportEntity withQuerySrc(String querySrc) {
        this.querySrc = querySrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_target_id")
    public String queryTargetId;
    public HistoryExportEntity withQueryTargetId(String queryTargetId) {
        this.queryTargetId = queryTargetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_target_name")
    public String queryTargetName;
    public HistoryExportEntity withQueryTargetName(String queryTargetName) {
        this.queryTargetName = queryTargetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_target_permission")
    public String queryTargetPermission;
    public HistoryExportEntity withQueryTargetPermission(String queryTargetPermission) {
        this.queryTargetPermission = queryTargetPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_target_permission_set")
    public String queryTargetPermissionSet;
    public HistoryExportEntity withQueryTargetPermissionSet(String queryTargetPermissionSet) {
        this.queryTargetPermissionSet = queryTargetPermissionSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_target_platform")
    public String queryTargetPlatform;
    public HistoryExportEntity withQueryTargetPlatform(String queryTargetPlatform) {
        this.queryTargetPlatform = queryTargetPlatform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_target_user_id")
    public String queryTargetUserId;
    public HistoryExportEntity withQueryTargetUserId(String queryTargetUserId) {
        this.queryTargetUserId = queryTargetUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_target_username")
    public String queryTargetUsername;
    public HistoryExportEntity withQueryTargetUsername(String queryTargetUsername) {
        this.queryTargetUsername = queryTargetUsername;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_user_id")
    public String queryUserId;
    public HistoryExportEntity withQueryUserId(String queryUserId) {
        this.queryUserId = queryUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_username")
    public String queryUsername;
    public HistoryExportEntity withQueryUsername(String queryUsername) {
        this.queryUsername = queryUsername;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results_url")
    public String resultsUrl;
    public HistoryExportEntity withResultsUrl(String resultsUrl) {
        this.resultsUrl = resultsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_at")
    public OffsetDateTime startAt;
    public HistoryExportEntity withStartAt(OffsetDateTime startAt) {
        this.startAt = startAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public HistoryExportEntity withStatus(String status) {
        this.status = status;
        return this;
    }
}