package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * RepositorySubscription
 * Repository invitations let you manage who you collaborate with.
**/
public class RepositorySubscription {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public RepositorySubscription withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("ignored")
    public Boolean ignored;
    public RepositorySubscription withIgnored(Boolean ignored) {
        this.ignored = ignored;
        return this;
    }
    @JsonProperty("reason")
    public String reason;
    public RepositorySubscription withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonProperty("repository_url")
    public String repositoryUrl;
    public RepositorySubscription withRepositoryUrl(String repositoryUrl) {
        this.repositoryUrl = repositoryUrl;
        return this;
    }
    @JsonProperty("subscribed")
    public Boolean subscribed;
    public RepositorySubscription withSubscribed(Boolean subscribed) {
        this.subscribed = subscribed;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public RepositorySubscription withUrl(String url) {
        this.url = url;
        return this;
    }
}