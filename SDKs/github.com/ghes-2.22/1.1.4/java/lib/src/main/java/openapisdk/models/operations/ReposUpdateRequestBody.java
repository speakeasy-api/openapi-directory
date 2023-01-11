package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposUpdateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_merge_commit")
    public Boolean allowMergeCommit;
    public ReposUpdateRequestBody withAllowMergeCommit(Boolean allowMergeCommit) {
        this.allowMergeCommit = allowMergeCommit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_rebase_merge")
    public Boolean allowRebaseMerge;
    public ReposUpdateRequestBody withAllowRebaseMerge(Boolean allowRebaseMerge) {
        this.allowRebaseMerge = allowRebaseMerge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_squash_merge")
    public Boolean allowSquashMerge;
    public ReposUpdateRequestBody withAllowSquashMerge(Boolean allowSquashMerge) {
        this.allowSquashMerge = allowSquashMerge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public ReposUpdateRequestBody withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_branch")
    public String defaultBranch;
    public ReposUpdateRequestBody withDefaultBranch(String defaultBranch) {
        this.defaultBranch = defaultBranch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete_branch_on_merge")
    public Boolean deleteBranchOnMerge;
    public ReposUpdateRequestBody withDeleteBranchOnMerge(Boolean deleteBranchOnMerge) {
        this.deleteBranchOnMerge = deleteBranchOnMerge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ReposUpdateRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_issues")
    public Boolean hasIssues;
    public ReposUpdateRequestBody withHasIssues(Boolean hasIssues) {
        this.hasIssues = hasIssues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_projects")
    public Boolean hasProjects;
    public ReposUpdateRequestBody withHasProjects(Boolean hasProjects) {
        this.hasProjects = hasProjects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_wiki")
    public Boolean hasWiki;
    public ReposUpdateRequestBody withHasWiki(Boolean hasWiki) {
        this.hasWiki = hasWiki;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homepage")
    public String homepage;
    public ReposUpdateRequestBody withHomepage(String homepage) {
        this.homepage = homepage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_template")
    public Boolean isTemplate;
    public ReposUpdateRequestBody withIsTemplate(Boolean isTemplate) {
        this.isTemplate = isTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ReposUpdateRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private")
    public Boolean private_;
    public ReposUpdateRequestBody withPrivate(Boolean private_) {
        this.private_ = private_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibility")
    public ReposUpdateRequestBodyVisibilityEnum visibility;
    public ReposUpdateRequestBody withVisibility(ReposUpdateRequestBodyVisibilityEnum visibility) {
        this.visibility = visibility;
        return this;
    }
}