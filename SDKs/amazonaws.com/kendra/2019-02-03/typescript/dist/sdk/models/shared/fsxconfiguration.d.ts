import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceToIndexFieldMapping } from "./datasourcetoindexfieldmapping";
import { DataSourceVpcConfiguration } from "./datasourcevpcconfiguration";
import { FsxFileSystemTypeEnum } from "./fsxfilesystemtypeenum";
/**
 * Provides the configuration information to connect to Amazon FSx as your data source.
 */
export declare class FsxConfiguration extends SpeakeasyBase {
    exclusionPatterns?: string[];
    fieldMappings?: DataSourceToIndexFieldMapping[];
    fileSystemId: string;
    fileSystemType: FsxFileSystemTypeEnum;
    inclusionPatterns?: string[];
    secretArn?: string;
    vpcConfiguration: DataSourceVpcConfiguration;
}
