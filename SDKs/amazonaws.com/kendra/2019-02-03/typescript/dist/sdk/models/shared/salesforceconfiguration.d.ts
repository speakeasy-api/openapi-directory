import { SpeakeasyBase } from "../../../internal/utils";
import { SalesforceChatterFeedConfiguration } from "./salesforcechatterfeedconfiguration";
import { SalesforceKnowledgeArticleConfiguration } from "./salesforceknowledgearticleconfiguration";
import { SalesforceStandardObjectAttachmentConfiguration } from "./salesforcestandardobjectattachmentconfiguration";
import { SalesforceStandardObjectConfiguration } from "./salesforcestandardobjectconfiguration";
/**
 * Provides the configuration information to connect to Salesforce as your data source.
 */
export declare class SalesforceConfiguration extends SpeakeasyBase {
    chatterFeedConfiguration?: SalesforceChatterFeedConfiguration;
    crawlAttachments?: boolean;
    excludeAttachmentFilePatterns?: string[];
    includeAttachmentFilePatterns?: string[];
    knowledgeArticleConfiguration?: SalesforceKnowledgeArticleConfiguration;
    secretArn: string;
    serverUrl: string;
    standardObjectAttachmentConfiguration?: SalesforceStandardObjectAttachmentConfiguration;
    standardObjectConfigurations?: SalesforceStandardObjectConfiguration[];
}
