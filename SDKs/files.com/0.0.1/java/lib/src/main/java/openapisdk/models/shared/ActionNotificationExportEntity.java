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
 * ActionNotificationExportEntity
 * Show Action Notification Export
**/
public class ActionNotificationExportEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end_at")
    public OffsetDateTime endAt;
    public ActionNotificationExportEntity withEndAt(OffsetDateTime endAt) {
        this.endAt = endAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("export_version")
    public String exportVersion;
    public ActionNotificationExportEntity withExportVersion(String exportVersion) {
        this.exportVersion = exportVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public ActionNotificationExportEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_folder")
    public String queryFolder;
    public ActionNotificationExportEntity withQueryFolder(String queryFolder) {
        this.queryFolder = queryFolder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_message")
    public String queryMessage;
    public ActionNotificationExportEntity withQueryMessage(String queryMessage) {
        this.queryMessage = queryMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_path")
    public String queryPath;
    public ActionNotificationExportEntity withQueryPath(String queryPath) {
        this.queryPath = queryPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_request_method")
    public String queryRequestMethod;
    public ActionNotificationExportEntity withQueryRequestMethod(String queryRequestMethod) {
        this.queryRequestMethod = queryRequestMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_request_url")
    public String queryRequestUrl;
    public ActionNotificationExportEntity withQueryRequestUrl(String queryRequestUrl) {
        this.queryRequestUrl = queryRequestUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_status")
    public String queryStatus;
    public ActionNotificationExportEntity withQueryStatus(String queryStatus) {
        this.queryStatus = queryStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_success")
    public Boolean querySuccess;
    public ActionNotificationExportEntity withQuerySuccess(Boolean querySuccess) {
        this.querySuccess = querySuccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results_url")
    public String resultsUrl;
    public ActionNotificationExportEntity withResultsUrl(String resultsUrl) {
        this.resultsUrl = resultsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_at")
    public OffsetDateTime startAt;
    public ActionNotificationExportEntity withStartAt(OffsetDateTime startAt) {
        this.startAt = startAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public ActionNotificationExportEntity withStatus(String status) {
        this.status = status;
        return this;
    }
}