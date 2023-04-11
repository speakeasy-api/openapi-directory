import { SpeakeasyBase } from "../../../internal/utils";
import { SalesforceCustomKnowledgeArticleTypeConfiguration } from "./salesforcecustomknowledgearticletypeconfiguration";
import { SalesforceKnowledgeArticleStateEnum } from "./salesforceknowledgearticlestateenum";
import { SalesforceStandardKnowledgeArticleTypeConfiguration } from "./salesforcestandardknowledgearticletypeconfiguration";
/**
 * Provides the configuration information for the knowledge article types that Amazon Kendra indexes. Amazon Kendra indexes standard knowledge articles and the standard fields of knowledge articles, or the custom fields of custom knowledge articles, but not both
 */
export declare class SalesforceKnowledgeArticleConfiguration extends SpeakeasyBase {
    customKnowledgeArticleTypeConfigurations?: SalesforceCustomKnowledgeArticleTypeConfiguration[];
    includedStates: SalesforceKnowledgeArticleStateEnum[];
    standardKnowledgeArticleTypeConfiguration?: SalesforceStandardKnowledgeArticleTypeConfiguration;
}
