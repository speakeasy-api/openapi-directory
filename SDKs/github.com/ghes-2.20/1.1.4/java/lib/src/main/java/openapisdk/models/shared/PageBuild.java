package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * PageBuild
 * Page Build
**/
public class PageBuild {
    @JsonProperty("commit")
    public String commit;
    public PageBuild withCommit(String commit) {
        this.commit = commit;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public PageBuild withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("duration")
    public Long duration;
    public PageBuild withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonProperty("error")
    public PageBuildError error;
    public PageBuild withError(PageBuildError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("pusher")
    public PageBuildSimpleUser pusher;
    public PageBuild withPusher(PageBuildSimpleUser pusher) {
        this.pusher = pusher;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public PageBuild withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public PageBuild withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public PageBuild withUrl(String url) {
        this.url = url;
        return this;
    }
}