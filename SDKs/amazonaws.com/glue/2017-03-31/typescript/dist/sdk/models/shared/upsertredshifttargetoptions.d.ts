import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The options to configure an upsert operation when writing to a Redshift target .
 */
export declare class UpsertRedshiftTargetOptions extends SpeakeasyBase {
    connectionName?: string;
    tableLocation?: string;
    upsertKeys?: string[];
}
