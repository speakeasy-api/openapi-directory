/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GitHubConfiguration - Provides the configuration information to connect to GitHub as your data source.
 */
public class GitHubConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExclusionFileNamePatterns")
    public String[] exclusionFileNamePatterns;

    public GitHubConfiguration withExclusionFileNamePatterns(String[] exclusionFileNamePatterns) {
        this.exclusionFileNamePatterns = exclusionFileNamePatterns;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExclusionFileTypePatterns")
    public String[] exclusionFileTypePatterns;

    public GitHubConfiguration withExclusionFileTypePatterns(String[] exclusionFileTypePatterns) {
        this.exclusionFileTypePatterns = exclusionFileTypePatterns;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExclusionFolderNamePatterns")
    public String[] exclusionFolderNamePatterns;

    public GitHubConfiguration withExclusionFolderNamePatterns(String[] exclusionFolderNamePatterns) {
        this.exclusionFolderNamePatterns = exclusionFolderNamePatterns;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GitHubCommitConfigurationFieldMappings")
    public DataSourceToIndexFieldMapping[] gitHubCommitConfigurationFieldMappings;

    public GitHubConfiguration withGitHubCommitConfigurationFieldMappings(DataSourceToIndexFieldMapping[] gitHubCommitConfigurationFieldMappings) {
        this.gitHubCommitConfigurationFieldMappings = gitHubCommitConfigurationFieldMappings;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GitHubDocumentCrawlProperties")
    public GitHubDocumentCrawlProperties gitHubDocumentCrawlProperties;

    public GitHubConfiguration withGitHubDocumentCrawlProperties(GitHubDocumentCrawlProperties gitHubDocumentCrawlProperties) {
        this.gitHubDocumentCrawlProperties = gitHubDocumentCrawlProperties;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GitHubIssueAttachmentConfigurationFieldMappings")
    public DataSourceToIndexFieldMapping[] gitHubIssueAttachmentConfigurationFieldMappings;

    public GitHubConfiguration withGitHubIssueAttachmentConfigurationFieldMappings(DataSourceToIndexFieldMapping[] gitHubIssueAttachmentConfigurationFieldMappings) {
        this.gitHubIssueAttachmentConfigurationFieldMappings = gitHubIssueAttachmentConfigurationFieldMappings;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GitHubIssueCommentConfigurationFieldMappings")
    public DataSourceToIndexFieldMapping[] gitHubIssueCommentConfigurationFieldMappings;

    public GitHubConfiguration withGitHubIssueCommentConfigurationFieldMappings(DataSourceToIndexFieldMapping[] gitHubIssueCommentConfigurationFieldMappings) {
        this.gitHubIssueCommentConfigurationFieldMappings = gitHubIssueCommentConfigurationFieldMappings;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GitHubIssueDocumentConfigurationFieldMappings")
    public DataSourceToIndexFieldMapping[] gitHubIssueDocumentConfigurationFieldMappings;

    public GitHubConfiguration withGitHubIssueDocumentConfigurationFieldMappings(DataSourceToIndexFieldMapping[] gitHubIssueDocumentConfigurationFieldMappings) {
        this.gitHubIssueDocumentConfigurationFieldMappings = gitHubIssueDocumentConfigurationFieldMappings;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GitHubPullRequestCommentConfigurationFieldMappings")
    public DataSourceToIndexFieldMapping[] gitHubPullRequestCommentConfigurationFieldMappings;

    public GitHubConfiguration withGitHubPullRequestCommentConfigurationFieldMappings(DataSourceToIndexFieldMapping[] gitHubPullRequestCommentConfigurationFieldMappings) {
        this.gitHubPullRequestCommentConfigurationFieldMappings = gitHubPullRequestCommentConfigurationFieldMappings;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GitHubPullRequestDocumentAttachmentConfigurationFieldMappings")
    public DataSourceToIndexFieldMapping[] gitHubPullRequestDocumentAttachmentConfigurationFieldMappings;

    public GitHubConfiguration withGitHubPullRequestDocumentAttachmentConfigurationFieldMappings(DataSourceToIndexFieldMapping[] gitHubPullRequestDocumentAttachmentConfigurationFieldMappings) {
        this.gitHubPullRequestDocumentAttachmentConfigurationFieldMappings = gitHubPullRequestDocumentAttachmentConfigurationFieldMappings;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GitHubPullRequestDocumentConfigurationFieldMappings")
    public DataSourceToIndexFieldMapping[] gitHubPullRequestDocumentConfigurationFieldMappings;

    public GitHubConfiguration withGitHubPullRequestDocumentConfigurationFieldMappings(DataSourceToIndexFieldMapping[] gitHubPullRequestDocumentConfigurationFieldMappings) {
        this.gitHubPullRequestDocumentConfigurationFieldMappings = gitHubPullRequestDocumentConfigurationFieldMappings;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GitHubRepositoryConfigurationFieldMappings")
    public DataSourceToIndexFieldMapping[] gitHubRepositoryConfigurationFieldMappings;

    public GitHubConfiguration withGitHubRepositoryConfigurationFieldMappings(DataSourceToIndexFieldMapping[] gitHubRepositoryConfigurationFieldMappings) {
        this.gitHubRepositoryConfigurationFieldMappings = gitHubRepositoryConfigurationFieldMappings;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InclusionFileNamePatterns")
    public String[] inclusionFileNamePatterns;

    public GitHubConfiguration withInclusionFileNamePatterns(String[] inclusionFileNamePatterns) {
        this.inclusionFileNamePatterns = inclusionFileNamePatterns;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InclusionFileTypePatterns")
    public String[] inclusionFileTypePatterns;

    public GitHubConfiguration withInclusionFileTypePatterns(String[] inclusionFileTypePatterns) {
        this.inclusionFileTypePatterns = inclusionFileTypePatterns;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InclusionFolderNamePatterns")
    public String[] inclusionFolderNamePatterns;

    public GitHubConfiguration withInclusionFolderNamePatterns(String[] inclusionFolderNamePatterns) {
        this.inclusionFolderNamePatterns = inclusionFolderNamePatterns;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OnPremiseConfiguration")
    public OnPremiseConfiguration onPremiseConfiguration;

    public GitHubConfiguration withOnPremiseConfiguration(OnPremiseConfiguration onPremiseConfiguration) {
        this.onPremiseConfiguration = onPremiseConfiguration;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RepositoryFilter")
    public String[] repositoryFilter;

    public GitHubConfiguration withRepositoryFilter(String[] repositoryFilter) {
        this.repositoryFilter = repositoryFilter;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SaaSConfiguration")
    public SaaSConfiguration saaSConfiguration;

    public GitHubConfiguration withSaaSConfiguration(SaaSConfiguration saaSConfiguration) {
        this.saaSConfiguration = saaSConfiguration;
        return this;
    }
    
    @JsonProperty("SecretArn")
    public String secretArn;

    public GitHubConfiguration withSecretArn(String secretArn) {
        this.secretArn = secretArn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public TypeEnum type;

    public GitHubConfiguration withType(TypeEnum type) {
        this.type = type;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UseChangeLog")
    public Boolean useChangeLog;

    public GitHubConfiguration withUseChangeLog(Boolean useChangeLog) {
        this.useChangeLog = useChangeLog;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcConfiguration")
    public DataSourceVpcConfiguration vpcConfiguration;

    public GitHubConfiguration withVpcConfiguration(DataSourceVpcConfiguration vpcConfiguration) {
        this.vpcConfiguration = vpcConfiguration;
        return this;
    }
    
    public GitHubConfiguration(@JsonProperty("SecretArn") String secretArn) {
        this.secretArn = secretArn;
  }
}
