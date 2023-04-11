import { SpeakeasyBase } from "../../../internal/utils";
import { GlueRecordTypeEnum } from "./gluerecordtypeenum";
/**
 * Additional connection options for the connector.
 */
export declare class JDBCConnectorOptions extends SpeakeasyBase {
    dataTypeMapping?: Record<string, GlueRecordTypeEnum>;
    filterPredicate?: string;
    jobBookmarkKeys?: string[];
    jobBookmarkKeysSortOrder?: string;
    lowerBound?: number;
    numPartitions?: number;
    partitionColumn?: string;
    upperBound?: number;
}
