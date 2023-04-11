import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceToIndexFieldMapping } from "./datasourcetoindexfieldmapping";
import { OneDriveUsers } from "./onedriveusers";
/**
 * Provides the configuration information to connect to OneDrive as your data source.
 */
export declare class OneDriveConfiguration extends SpeakeasyBase {
    disableLocalGroups?: boolean;
    exclusionPatterns?: string[];
    fieldMappings?: DataSourceToIndexFieldMapping[];
    inclusionPatterns?: string[];
    oneDriveUsers: OneDriveUsers;
    secretArn: string;
    tenantDomain: string;
}
