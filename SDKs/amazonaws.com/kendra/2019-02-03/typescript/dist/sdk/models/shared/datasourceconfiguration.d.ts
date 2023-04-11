import { SpeakeasyBase } from "../../../internal/utils";
import { AlfrescoConfiguration } from "./alfrescoconfiguration";
import { BoxConfiguration } from "./boxconfiguration";
import { ConfluenceConfiguration } from "./confluenceconfiguration";
import { DatabaseConfiguration } from "./databaseconfiguration";
import { FsxConfiguration } from "./fsxconfiguration";
import { GitHubConfiguration } from "./githubconfiguration";
import { GoogleDriveConfiguration } from "./googledriveconfiguration";
import { JiraConfiguration } from "./jiraconfiguration";
import { OneDriveConfiguration } from "./onedriveconfiguration";
import { QuipConfiguration } from "./quipconfiguration";
import { S3DataSourceConfiguration } from "./s3datasourceconfiguration";
import { SalesforceConfiguration } from "./salesforceconfiguration";
import { ServiceNowConfiguration } from "./servicenowconfiguration";
import { SharePointConfiguration } from "./sharepointconfiguration";
import { SlackConfiguration } from "./slackconfiguration";
import { TemplateConfiguration } from "./templateconfiguration";
import { WebCrawlerConfiguration } from "./webcrawlerconfiguration";
import { WorkDocsConfiguration } from "./workdocsconfiguration";
/**
 * Provides the configuration information for an Amazon Kendra data source.
 */
export declare class DataSourceConfiguration extends SpeakeasyBase {
    alfrescoConfiguration?: AlfrescoConfiguration;
    boxConfiguration?: BoxConfiguration;
    confluenceConfiguration?: ConfluenceConfiguration;
    databaseConfiguration?: DatabaseConfiguration;
    fsxConfiguration?: FsxConfiguration;
    gitHubConfiguration?: GitHubConfiguration;
    googleDriveConfiguration?: GoogleDriveConfiguration;
    jiraConfiguration?: JiraConfiguration;
    oneDriveConfiguration?: OneDriveConfiguration;
    quipConfiguration?: QuipConfiguration;
    s3Configuration?: S3DataSourceConfiguration;
    salesforceConfiguration?: SalesforceConfiguration;
    serviceNowConfiguration?: ServiceNowConfiguration;
    sharePointConfiguration?: SharePointConfiguration;
    slackConfiguration?: SlackConfiguration;
    templateConfiguration?: TemplateConfiguration;
    /**
     * Provides the configuration information required for Amazon Kendra Web Crawler.
     */
    webCrawlerConfiguration?: WebCrawlerConfiguration;
    workDocsConfiguration?: WorkDocsConfiguration;
}
