import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceToIndexFieldMapping } from "./datasourcetoindexfieldmapping";
import { DataSourceVpcConfiguration } from "./datasourcevpcconfiguration";
/**
 * Provides the configuration information to connect to Box as your data source.
 */
export declare class BoxConfiguration extends SpeakeasyBase {
    commentFieldMappings?: DataSourceToIndexFieldMapping[];
    crawlComments?: boolean;
    crawlTasks?: boolean;
    crawlWebLinks?: boolean;
    enterpriseId: string;
    exclusionPatterns?: string[];
    fileFieldMappings?: DataSourceToIndexFieldMapping[];
    inclusionPatterns?: string[];
    secretArn: string;
    taskFieldMappings?: DataSourceToIndexFieldMapping[];
    useChangeLog?: boolean;
    vpcConfiguration?: DataSourceVpcConfiguration;
    webLinkFieldMappings?: DataSourceToIndexFieldMapping[];
}
