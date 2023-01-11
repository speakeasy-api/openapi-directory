package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrgsUpdateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billing_email")
    public String billingEmail;
    public OrgsUpdateRequestBody withBillingEmail(String billingEmail) {
        this.billingEmail = billingEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blog")
    public String blog;
    public OrgsUpdateRequestBody withBlog(String blog) {
        this.blog = blog;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company")
    public String company;
    public OrgsUpdateRequestBody withCompany(String company) {
        this.company = company;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_repository_permission")
    public OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum defaultRepositoryPermission;
    public OrgsUpdateRequestBody withDefaultRepositoryPermission(OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum defaultRepositoryPermission) {
        this.defaultRepositoryPermission = defaultRepositoryPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public OrgsUpdateRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public OrgsUpdateRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_organization_projects")
    public Boolean hasOrganizationProjects;
    public OrgsUpdateRequestBody withHasOrganizationProjects(Boolean hasOrganizationProjects) {
        this.hasOrganizationProjects = hasOrganizationProjects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_repository_projects")
    public Boolean hasRepositoryProjects;
    public OrgsUpdateRequestBody withHasRepositoryProjects(Boolean hasRepositoryProjects) {
        this.hasRepositoryProjects = hasRepositoryProjects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public OrgsUpdateRequestBody withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members_allowed_repository_creation_type")
    public OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum membersAllowedRepositoryCreationType;
    public OrgsUpdateRequestBody withMembersAllowedRepositoryCreationType(OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum membersAllowedRepositoryCreationType) {
        this.membersAllowedRepositoryCreationType = membersAllowedRepositoryCreationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members_can_create_internal_repositories")
    public Boolean membersCanCreateInternalRepositories;
    public OrgsUpdateRequestBody withMembersCanCreateInternalRepositories(Boolean membersCanCreateInternalRepositories) {
        this.membersCanCreateInternalRepositories = membersCanCreateInternalRepositories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members_can_create_pages")
    public Boolean membersCanCreatePages;
    public OrgsUpdateRequestBody withMembersCanCreatePages(Boolean membersCanCreatePages) {
        this.membersCanCreatePages = membersCanCreatePages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members_can_create_private_repositories")
    public Boolean membersCanCreatePrivateRepositories;
    public OrgsUpdateRequestBody withMembersCanCreatePrivateRepositories(Boolean membersCanCreatePrivateRepositories) {
        this.membersCanCreatePrivateRepositories = membersCanCreatePrivateRepositories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members_can_create_public_repositories")
    public Boolean membersCanCreatePublicRepositories;
    public OrgsUpdateRequestBody withMembersCanCreatePublicRepositories(Boolean membersCanCreatePublicRepositories) {
        this.membersCanCreatePublicRepositories = membersCanCreatePublicRepositories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members_can_create_repositories")
    public Boolean membersCanCreateRepositories;
    public OrgsUpdateRequestBody withMembersCanCreateRepositories(Boolean membersCanCreateRepositories) {
        this.membersCanCreateRepositories = membersCanCreateRepositories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OrgsUpdateRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("twitter_username")
    public String twitterUsername;
    public OrgsUpdateRequestBody withTwitterUsername(String twitterUsername) {
        this.twitterUsername = twitterUsername;
        return this;
    }
}