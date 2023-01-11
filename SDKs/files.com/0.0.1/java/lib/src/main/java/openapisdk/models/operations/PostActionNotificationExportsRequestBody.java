package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class PostActionNotificationExportsRequestBody {
    @SpeakeasyMetadata("multipartForm:name=end_at")
    public OffsetDateTime endAt;
    public PostActionNotificationExportsRequestBody withEndAt(OffsetDateTime endAt) {
        this.endAt = endAt;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_folder")
    public String queryFolder;
    public PostActionNotificationExportsRequestBody withQueryFolder(String queryFolder) {
        this.queryFolder = queryFolder;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_message")
    public String queryMessage;
    public PostActionNotificationExportsRequestBody withQueryMessage(String queryMessage) {
        this.queryMessage = queryMessage;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_path")
    public String queryPath;
    public PostActionNotificationExportsRequestBody withQueryPath(String queryPath) {
        this.queryPath = queryPath;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_request_method")
    public String queryRequestMethod;
    public PostActionNotificationExportsRequestBody withQueryRequestMethod(String queryRequestMethod) {
        this.queryRequestMethod = queryRequestMethod;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_request_url")
    public String queryRequestUrl;
    public PostActionNotificationExportsRequestBody withQueryRequestUrl(String queryRequestUrl) {
        this.queryRequestUrl = queryRequestUrl;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_status")
    public String queryStatus;
    public PostActionNotificationExportsRequestBody withQueryStatus(String queryStatus) {
        this.queryStatus = queryStatus;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=query_success")
    public Boolean querySuccess;
    public PostActionNotificationExportsRequestBody withQuerySuccess(Boolean querySuccess) {
        this.querySuccess = querySuccess;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=start_at")
    public OffsetDateTime startAt;
    public PostActionNotificationExportsRequestBody withStartAt(OffsetDateTime startAt) {
        this.startAt = startAt;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_id")
    public Integer userId;
    public PostActionNotificationExportsRequestBody withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}