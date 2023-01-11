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
 * ThreadSubscription
 * Thread Subscription
**/
public class ThreadSubscription {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ThreadSubscription withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("ignored")
    public Boolean ignored;
    public ThreadSubscription withIgnored(Boolean ignored) {
        this.ignored = ignored;
        return this;
    }
    @JsonProperty("reason")
    public String reason;
    public ThreadSubscription withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repository_url")
    public String repositoryUrl;
    public ThreadSubscription withRepositoryUrl(String repositoryUrl) {
        this.repositoryUrl = repositoryUrl;
        return this;
    }
    @JsonProperty("subscribed")
    public Boolean subscribed;
    public ThreadSubscription withSubscribed(Boolean subscribed) {
        this.subscribed = subscribed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thread_url")
    public String threadUrl;
    public ThreadSubscription withThreadUrl(String threadUrl) {
        this.threadUrl = threadUrl;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ThreadSubscription withUrl(String url) {
        this.url = url;
        return this;
    }
}