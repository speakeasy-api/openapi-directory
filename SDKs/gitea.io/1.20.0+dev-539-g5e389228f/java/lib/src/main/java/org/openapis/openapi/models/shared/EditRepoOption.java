/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EditRepoOption - EditRepoOption options when editing a repository's properties
 */
public class EditRepoOption {
    /**
     * either `true` to allow mark pr as merged manually, or `false` to prevent it.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_manual_merge")
    public Boolean allowManualMerge;

    public EditRepoOption withAllowManualMerge(Boolean allowManualMerge) {
        this.allowManualMerge = allowManualMerge;
        return this;
    }
    
    /**
     * either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_merge_commits")
    public Boolean allowMergeCommits;

    public EditRepoOption withAllowMergeCommits(Boolean allowMergeCommits) {
        this.allowMergeCommits = allowMergeCommits;
        return this;
    }
    
    /**
     * either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_rebase")
    public Boolean allowRebase;

    public EditRepoOption withAllowRebase(Boolean allowRebase) {
        this.allowRebase = allowRebase;
        return this;
    }
    
    /**
     * either `true` to allow rebase with explicit merge commits (--no-ff), or `false` to prevent rebase with explicit merge commits.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_rebase_explicit")
    public Boolean allowRebaseExplicit;

    public EditRepoOption withAllowRebaseExplicit(Boolean allowRebaseExplicit) {
        this.allowRebaseExplicit = allowRebaseExplicit;
        return this;
    }
    
    /**
     * either `true` to allow updating pull request branch by rebase, or `false` to prevent it.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_rebase_update")
    public Boolean allowRebaseUpdate;

    public EditRepoOption withAllowRebaseUpdate(Boolean allowRebaseUpdate) {
        this.allowRebaseUpdate = allowRebaseUpdate;
        return this;
    }
    
    /**
     * either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_squash_merge")
    public Boolean allowSquashMerge;

    public EditRepoOption withAllowSquashMerge(Boolean allowSquashMerge) {
        this.allowSquashMerge = allowSquashMerge;
        return this;
    }
    
    /**
     * set to `true` to archive this repository.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;

    public EditRepoOption withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    
    /**
     * either `true` to enable AutodetectManualMerge, or `false` to prevent it. Note: In some special cases, misjudgments can occur.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autodetect_manual_merge")
    public Boolean autodetectManualMerge;

    public EditRepoOption withAutodetectManualMerge(Boolean autodetectManualMerge) {
        this.autodetectManualMerge = autodetectManualMerge;
        return this;
    }
    
    /**
     * set to `true` to allow edits from maintainers by default
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_allow_maintainer_edit")
    public Boolean defaultAllowMaintainerEdit;

    public EditRepoOption withDefaultAllowMaintainerEdit(Boolean defaultAllowMaintainerEdit) {
        this.defaultAllowMaintainerEdit = defaultAllowMaintainerEdit;
        return this;
    }
    
    /**
     * sets the default branch for this repository.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_branch")
    public String defaultBranch;

    public EditRepoOption withDefaultBranch(String defaultBranch) {
        this.defaultBranch = defaultBranch;
        return this;
    }
    
    /**
     * set to `true` to delete pr branch after merge by default
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_delete_branch_after_merge")
    public Boolean defaultDeleteBranchAfterMerge;

    public EditRepoOption withDefaultDeleteBranchAfterMerge(Boolean defaultDeleteBranchAfterMerge) {
        this.defaultDeleteBranchAfterMerge = defaultDeleteBranchAfterMerge;
        return this;
    }
    
    /**
     * set to a merge style to be used by this repository: "merge", "rebase", "rebase-merge", or "squash".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_merge_style")
    public String defaultMergeStyle;

    public EditRepoOption withDefaultMergeStyle(String defaultMergeStyle) {
        this.defaultMergeStyle = defaultMergeStyle;
        return this;
    }
    
    /**
     * a short description of the repository.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public EditRepoOption withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * enable prune - remove obsolete remote-tracking references
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable_prune")
    public Boolean enablePrune;

    public EditRepoOption withEnablePrune(Boolean enablePrune) {
        this.enablePrune = enablePrune;
        return this;
    }
    
    /**
     * ExternalTracker represents settings for external tracker
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_tracker")
    public ExternalTracker externalTracker;

    public EditRepoOption withExternalTracker(ExternalTracker externalTracker) {
        this.externalTracker = externalTracker;
        return this;
    }
    
    /**
     * ExternalWiki represents setting for external wiki
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_wiki")
    public ExternalWiki externalWiki;

    public EditRepoOption withExternalWiki(ExternalWiki externalWiki) {
        this.externalWiki = externalWiki;
        return this;
    }
    
    /**
     * either `true` to enable actions unit, or `false` to disable them.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_actions")
    public Boolean hasActions;

    public EditRepoOption withHasActions(Boolean hasActions) {
        this.hasActions = hasActions;
        return this;
    }
    
    /**
     * either `true` to enable issues for this repository or `false` to disable them.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_issues")
    public Boolean hasIssues;

    public EditRepoOption withHasIssues(Boolean hasIssues) {
        this.hasIssues = hasIssues;
        return this;
    }
    
    /**
     * either `true` to enable packages unit, or `false` to disable them.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_packages")
    public Boolean hasPackages;

    public EditRepoOption withHasPackages(Boolean hasPackages) {
        this.hasPackages = hasPackages;
        return this;
    }
    
    /**
     * either `true` to enable project unit, or `false` to disable them.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_projects")
    public Boolean hasProjects;

    public EditRepoOption withHasProjects(Boolean hasProjects) {
        this.hasProjects = hasProjects;
        return this;
    }
    
    /**
     * either `true` to allow pull requests, or `false` to prevent pull request.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_pull_requests")
    public Boolean hasPullRequests;

    public EditRepoOption withHasPullRequests(Boolean hasPullRequests) {
        this.hasPullRequests = hasPullRequests;
        return this;
    }
    
    /**
     * either `true` to enable releases unit, or `false` to disable them.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_releases")
    public Boolean hasReleases;

    public EditRepoOption withHasReleases(Boolean hasReleases) {
        this.hasReleases = hasReleases;
        return this;
    }
    
    /**
     * either `true` to enable the wiki for this repository or `false` to disable it.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_wiki")
    public Boolean hasWiki;

    public EditRepoOption withHasWiki(Boolean hasWiki) {
        this.hasWiki = hasWiki;
        return this;
    }
    
    /**
     * either `true` to ignore whitespace for conflicts, or `false` to not ignore whitespace.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignore_whitespace_conflicts")
    public Boolean ignoreWhitespaceConflicts;

    public EditRepoOption withIgnoreWhitespaceConflicts(Boolean ignoreWhitespaceConflicts) {
        this.ignoreWhitespaceConflicts = ignoreWhitespaceConflicts;
        return this;
    }
    
    /**
     * InternalTracker represents settings for internal tracker
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internal_tracker")
    public InternalTracker internalTracker;

    public EditRepoOption withInternalTracker(InternalTracker internalTracker) {
        this.internalTracker = internalTracker;
        return this;
    }
    
    /**
     * set to a string like `8h30m0s` to set the mirror interval time
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mirror_interval")
    public String mirrorInterval;

    public EditRepoOption withMirrorInterval(String mirrorInterval) {
        this.mirrorInterval = mirrorInterval;
        return this;
    }
    
    /**
     * name of the repository
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public EditRepoOption withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * either `true` to make the repository private or `false` to make it public.
     * Note: you will get a 422 error if the organization restricts changing repository visibility to organization
     * owners and a non-owner tries to change the value of private.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private")
    public Boolean private_;

    public EditRepoOption withPrivate(Boolean private_) {
        this.private_ = private_;
        return this;
    }
    
    /**
     * either `true` to make this repository a template or `false` to make it a normal repository
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public Boolean template;

    public EditRepoOption withTemplate(Boolean template) {
        this.template = template;
        return this;
    }
    
    /**
     * a URL with more information about the repository.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;

    public EditRepoOption withWebsite(String website) {
        this.website = website;
        return this;
    }
    
    public EditRepoOption(){}
}
