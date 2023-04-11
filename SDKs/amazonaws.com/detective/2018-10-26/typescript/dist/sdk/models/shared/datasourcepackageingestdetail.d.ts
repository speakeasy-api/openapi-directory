import { SpeakeasyBase } from "../../../internal/utils";
import { DatasourcePackageIngestStateEnum } from "./datasourcepackageingeststateenum";
import { TimestampForCollection } from "./timestampforcollection";
/**
 * Details about the data source packages ingested by your behavior graph.
 */
export declare class DatasourcePackageIngestDetail extends SpeakeasyBase {
    datasourcePackageIngestState?: DatasourcePackageIngestStateEnum;
    lastIngestStateChange?: Record<string, TimestampForCollection>;
}
