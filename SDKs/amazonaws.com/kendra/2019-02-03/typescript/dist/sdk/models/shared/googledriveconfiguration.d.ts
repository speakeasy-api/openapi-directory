import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceToIndexFieldMapping } from "./datasourcetoindexfieldmapping";
/**
 * Provides the configuration information to connect to Google Drive as your data source.
 */
export declare class GoogleDriveConfiguration extends SpeakeasyBase {
    excludeMimeTypes?: string[];
    excludeSharedDrives?: string[];
    excludeUserAccounts?: string[];
    exclusionPatterns?: string[];
    fieldMappings?: DataSourceToIndexFieldMapping[];
    inclusionPatterns?: string[];
    secretArn: string;
}
