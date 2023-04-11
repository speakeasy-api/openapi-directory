import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceToIndexFieldMapping } from "./datasourcetoindexfieldmapping";
import { DataSourceVpcConfiguration } from "./datasourcevpcconfiguration";
/**
 * Provides the configuration information to connect to Quip as your data source.
 */
export declare class QuipConfiguration extends SpeakeasyBase {
    attachmentFieldMappings?: DataSourceToIndexFieldMapping[];
    crawlAttachments?: boolean;
    crawlChatRooms?: boolean;
    crawlFileComments?: boolean;
    domain: string;
    exclusionPatterns?: string[];
    folderIds?: string[];
    inclusionPatterns?: string[];
    messageFieldMappings?: DataSourceToIndexFieldMapping[];
    secretArn: string;
    threadFieldMappings?: DataSourceToIndexFieldMapping[];
    vpcConfiguration?: DataSourceVpcConfiguration;
}
