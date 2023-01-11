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
 * RepositoryInvitation
 * Repository invitations let you manage who you collaborate with.
**/
public class RepositoryInvitation {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public RepositoryInvitation withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expired")
    public Boolean expired;
    public RepositoryInvitation withExpired(Boolean expired) {
        this.expired = expired;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public RepositoryInvitation withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public RepositoryInvitation withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("invitee")
    public RepositoryInvitationSimpleUser invitee;
    public RepositoryInvitation withInvitee(RepositoryInvitationSimpleUser invitee) {
        this.invitee = invitee;
        return this;
    }
    @JsonProperty("inviter")
    public RepositoryInvitationSimpleUser inviter;
    public RepositoryInvitation withInviter(RepositoryInvitationSimpleUser inviter) {
        this.inviter = inviter;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public RepositoryInvitation withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("permissions")
    public RepositoryInvitationPermissionsEnum permissions;
    public RepositoryInvitation withPermissions(RepositoryInvitationPermissionsEnum permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonProperty("repository")
    public MinimalRepository repository;
    public RepositoryInvitation withRepository(MinimalRepository repository) {
        this.repository = repository;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public RepositoryInvitation withUrl(String url) {
        this.url = url;
        return this;
    }
}