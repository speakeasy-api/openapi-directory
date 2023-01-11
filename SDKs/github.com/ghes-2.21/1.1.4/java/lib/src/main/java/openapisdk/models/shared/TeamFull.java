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
 * TeamFull
 * Groups of organization members that gives permissions on specified repositories.
**/
public class TeamFull {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public TeamFull withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public TeamFull withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public TeamFull withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public TeamFull withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_dn")
    public String ldapDn;
    public TeamFull withLdapDn(String ldapDn) {
        this.ldapDn = ldapDn;
        return this;
    }
    @JsonProperty("members_count")
    public Long membersCount;
    public TeamFull withMembersCount(Long membersCount) {
        this.membersCount = membersCount;
        return this;
    }
    @JsonProperty("members_url")
    public String membersUrl;
    public TeamFull withMembersUrl(String membersUrl) {
        this.membersUrl = membersUrl;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public TeamFull withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public TeamFull withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("organization")
    public OrganizationFull organization;
    public TeamFull withOrganization(OrganizationFull organization) {
        this.organization = organization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public TeamFullTeamSimple parent;
    public TeamFull withParent(TeamFullTeamSimple parent) {
        this.parent = parent;
        return this;
    }
    @JsonProperty("permission")
    public String permission;
    public TeamFull withPermission(String permission) {
        this.permission = permission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public TeamFullPrivacyEnum privacy;
    public TeamFull withPrivacy(TeamFullPrivacyEnum privacy) {
        this.privacy = privacy;
        return this;
    }
    @JsonProperty("repos_count")
    public Long reposCount;
    public TeamFull withReposCount(Long reposCount) {
        this.reposCount = reposCount;
        return this;
    }
    @JsonProperty("repositories_url")
    public String repositoriesUrl;
    public TeamFull withRepositoriesUrl(String repositoriesUrl) {
        this.repositoriesUrl = repositoriesUrl;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public TeamFull withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public TeamFull withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public TeamFull withUrl(String url) {
        this.url = url;
        return this;
    }
}