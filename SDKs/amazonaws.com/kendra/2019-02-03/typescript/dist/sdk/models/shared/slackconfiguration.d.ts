import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceToIndexFieldMapping } from "./datasourcetoindexfieldmapping";
import { DataSourceVpcConfiguration } from "./datasourcevpcconfiguration";
import { SlackEntityEnum } from "./slackentityenum";
/**
 * Provides the configuration information to connect to Slack as your data source.
 */
export declare class SlackConfiguration extends SpeakeasyBase {
    crawlBotMessage?: boolean;
    excludeArchived?: boolean;
    exclusionPatterns?: string[];
    fieldMappings?: DataSourceToIndexFieldMapping[];
    inclusionPatterns?: string[];
    lookBackPeriod?: number;
    privateChannelFilter?: string[];
    publicChannelFilter?: string[];
    secretArn: string;
    sinceCrawlDate: string;
    slackEntityList: SlackEntityEnum[];
    teamId: string;
    useChangeLog?: boolean;
    vpcConfiguration?: DataSourceVpcConfiguration;
}
