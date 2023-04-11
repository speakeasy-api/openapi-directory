import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceToIndexFieldMapping } from "./datasourcetoindexfieldmapping";
import { DataSourceVpcConfiguration } from "./datasourcevpcconfiguration";
import { GitHubDocumentCrawlProperties } from "./githubdocumentcrawlproperties";
import { OnPremiseConfiguration } from "./onpremiseconfiguration";
import { SaaSConfiguration } from "./saasconfiguration";
import { TypeEnum } from "./typeenum";
/**
 * Provides the configuration information to connect to GitHub as your data source.
 */
export declare class GitHubConfiguration extends SpeakeasyBase {
    exclusionFileNamePatterns?: string[];
    exclusionFileTypePatterns?: string[];
    exclusionFolderNamePatterns?: string[];
    gitHubCommitConfigurationFieldMappings?: DataSourceToIndexFieldMapping[];
    gitHubDocumentCrawlProperties?: GitHubDocumentCrawlProperties;
    gitHubIssueAttachmentConfigurationFieldMappings?: DataSourceToIndexFieldMapping[];
    gitHubIssueCommentConfigurationFieldMappings?: DataSourceToIndexFieldMapping[];
    gitHubIssueDocumentConfigurationFieldMappings?: DataSourceToIndexFieldMapping[];
    gitHubPullRequestCommentConfigurationFieldMappings?: DataSourceToIndexFieldMapping[];
    gitHubPullRequestDocumentAttachmentConfigurationFieldMappings?: DataSourceToIndexFieldMapping[];
    gitHubPullRequestDocumentConfigurationFieldMappings?: DataSourceToIndexFieldMapping[];
    gitHubRepositoryConfigurationFieldMappings?: DataSourceToIndexFieldMapping[];
    inclusionFileNamePatterns?: string[];
    inclusionFileTypePatterns?: string[];
    inclusionFolderNamePatterns?: string[];
    onPremiseConfiguration?: OnPremiseConfiguration;
    repositoryFilter?: string[];
    saaSConfiguration?: SaaSConfiguration;
    secretArn: string;
    type?: TypeEnum;
    useChangeLog?: boolean;
    vpcConfiguration?: DataSourceVpcConfiguration;
}
