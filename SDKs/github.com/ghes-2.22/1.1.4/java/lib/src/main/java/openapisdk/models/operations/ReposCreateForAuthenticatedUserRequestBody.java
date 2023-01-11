package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposCreateForAuthenticatedUserRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_merge_commit")
    public Boolean allowMergeCommit;
    public ReposCreateForAuthenticatedUserRequestBody withAllowMergeCommit(Boolean allowMergeCommit) {
        this.allowMergeCommit = allowMergeCommit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_rebase_merge")
    public Boolean allowRebaseMerge;
    public ReposCreateForAuthenticatedUserRequestBody withAllowRebaseMerge(Boolean allowRebaseMerge) {
        this.allowRebaseMerge = allowRebaseMerge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_squash_merge")
    public Boolean allowSquashMerge;
    public ReposCreateForAuthenticatedUserRequestBody withAllowSquashMerge(Boolean allowSquashMerge) {
        this.allowSquashMerge = allowSquashMerge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_init")
    public Boolean autoInit;
    public ReposCreateForAuthenticatedUserRequestBody withAutoInit(Boolean autoInit) {
        this.autoInit = autoInit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete_branch_on_merge")
    public Boolean deleteBranchOnMerge;
    public ReposCreateForAuthenticatedUserRequestBody withDeleteBranchOnMerge(Boolean deleteBranchOnMerge) {
        this.deleteBranchOnMerge = deleteBranchOnMerge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ReposCreateForAuthenticatedUserRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gitignore_template")
    public String gitignoreTemplate;
    public ReposCreateForAuthenticatedUserRequestBody withGitignoreTemplate(String gitignoreTemplate) {
        this.gitignoreTemplate = gitignoreTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_downloads")
    public Boolean hasDownloads;
    public ReposCreateForAuthenticatedUserRequestBody withHasDownloads(Boolean hasDownloads) {
        this.hasDownloads = hasDownloads;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_issues")
    public Boolean hasIssues;
    public ReposCreateForAuthenticatedUserRequestBody withHasIssues(Boolean hasIssues) {
        this.hasIssues = hasIssues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_projects")
    public Boolean hasProjects;
    public ReposCreateForAuthenticatedUserRequestBody withHasProjects(Boolean hasProjects) {
        this.hasProjects = hasProjects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_wiki")
    public Boolean hasWiki;
    public ReposCreateForAuthenticatedUserRequestBody withHasWiki(Boolean hasWiki) {
        this.hasWiki = hasWiki;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homepage")
    public String homepage;
    public ReposCreateForAuthenticatedUserRequestBody withHomepage(String homepage) {
        this.homepage = homepage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_template")
    public Boolean isTemplate;
    public ReposCreateForAuthenticatedUserRequestBody withIsTemplate(Boolean isTemplate) {
        this.isTemplate = isTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license_template")
    public String licenseTemplate;
    public ReposCreateForAuthenticatedUserRequestBody withLicenseTemplate(String licenseTemplate) {
        this.licenseTemplate = licenseTemplate;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ReposCreateForAuthenticatedUserRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private")
    public Boolean private_;
    public ReposCreateForAuthenticatedUserRequestBody withPrivate(Boolean private_) {
        this.private_ = private_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team_id")
    public Long teamId;
    public ReposCreateForAuthenticatedUserRequestBody withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
}