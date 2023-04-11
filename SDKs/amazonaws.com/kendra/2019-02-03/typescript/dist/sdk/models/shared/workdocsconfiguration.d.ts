import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceToIndexFieldMapping } from "./datasourcetoindexfieldmapping";
/**
 * <p>Provides the configuration information to connect to Amazon WorkDocs as your data source.</p> <p>Amazon WorkDocs connector is available in Oregon, North Virginia, Sydney, Singapore and Ireland regions.</p>
 */
export declare class WorkDocsConfiguration extends SpeakeasyBase {
    crawlComments?: boolean;
    exclusionPatterns?: string[];
    fieldMappings?: DataSourceToIndexFieldMapping[];
    inclusionPatterns?: string[];
    organizationId: string;
    useChangeLog?: boolean;
}
