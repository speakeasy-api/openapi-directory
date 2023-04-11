import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a Delta data store to crawl one or more Delta tables.
 */
export declare class DeltaTarget extends SpeakeasyBase {
    connectionName?: string;
    createNativeDeltaTable?: boolean;
    deltaTables?: string[];
    writeManifest?: boolean;
}
