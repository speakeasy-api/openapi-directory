import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceNowAuthenticationTypeEnum } from "./servicenowauthenticationtypeenum";
import { ServiceNowBuildVersionTypeEnum } from "./servicenowbuildversiontypeenum";
import { ServiceNowKnowledgeArticleConfiguration } from "./servicenowknowledgearticleconfiguration";
import { ServiceNowServiceCatalogConfiguration } from "./servicenowservicecatalogconfiguration";
/**
 * Provides the configuration information to connect to ServiceNow as your data source.
 */
export declare class ServiceNowConfiguration extends SpeakeasyBase {
    authenticationType?: ServiceNowAuthenticationTypeEnum;
    hostUrl: string;
    knowledgeArticleConfiguration?: ServiceNowKnowledgeArticleConfiguration;
    secretArn: string;
    serviceCatalogConfiguration?: ServiceNowServiceCatalogConfiguration;
    serviceNowBuildVersion: ServiceNowBuildVersionTypeEnum;
}
