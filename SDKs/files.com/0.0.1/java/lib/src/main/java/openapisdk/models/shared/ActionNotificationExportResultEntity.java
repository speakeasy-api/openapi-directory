package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActionNotificationExportResultEntity
 * List Action Notification Export Results
**/
public class ActionNotificationExportResultEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public Integer createdAt;
    public ActionNotificationExportResultEntity withCreatedAt(Integer createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("folder")
    public String folder;
    public ActionNotificationExportResultEntity withFolder(String folder) {
        this.folder = folder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public ActionNotificationExportResultEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ActionNotificationExportResultEntity withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public ActionNotificationExportResultEntity withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_headers")
    public String requestHeaders;
    public ActionNotificationExportResultEntity withRequestHeaders(String requestHeaders) {
        this.requestHeaders = requestHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_method")
    public String requestMethod;
    public ActionNotificationExportResultEntity withRequestMethod(String requestMethod) {
        this.requestMethod = requestMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_url")
    public String requestUrl;
    public ActionNotificationExportResultEntity withRequestUrl(String requestUrl) {
        this.requestUrl = requestUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Integer status;
    public ActionNotificationExportResultEntity withStatus(Integer status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public ActionNotificationExportResultEntity withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}