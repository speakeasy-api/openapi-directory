package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TeamFullTeamSimple
 * Groups of organization members that gives permissions on specified repositories.
**/
public class TeamFullTeamSimple {
    @JsonProperty("description")
    public String description;
    public TeamFullTeamSimple withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public TeamFullTeamSimple withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public TeamFullTeamSimple withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_dn")
    public String ldapDn;
    public TeamFullTeamSimple withLdapDn(String ldapDn) {
        this.ldapDn = ldapDn;
        return this;
    }
    @JsonProperty("members_url")
    public String membersUrl;
    public TeamFullTeamSimple withMembersUrl(String membersUrl) {
        this.membersUrl = membersUrl;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public TeamFullTeamSimple withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public TeamFullTeamSimple withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("permission")
    public String permission;
    public TeamFullTeamSimple withPermission(String permission) {
        this.permission = permission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public String privacy;
    public TeamFullTeamSimple withPrivacy(String privacy) {
        this.privacy = privacy;
        return this;
    }
    @JsonProperty("repositories_url")
    public String repositoriesUrl;
    public TeamFullTeamSimple withRepositoriesUrl(String repositoriesUrl) {
        this.repositoriesUrl = repositoriesUrl;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public TeamFullTeamSimple withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public TeamFullTeamSimple withUrl(String url) {
        this.url = url;
        return this;
    }
}