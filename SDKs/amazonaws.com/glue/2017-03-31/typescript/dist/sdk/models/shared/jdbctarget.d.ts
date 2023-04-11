import { SpeakeasyBase } from "../../../internal/utils";
import { JdbcMetadataEntryEnum } from "./jdbcmetadataentryenum";
/**
 * Specifies a JDBC data store to crawl.
 */
export declare class JdbcTarget extends SpeakeasyBase {
    connectionName?: string;
    enableAdditionalMetadata?: JdbcMetadataEntryEnum[];
    exclusions?: string[];
    path?: string;
}
