import { SpeakeasyBase } from "../../../internal/utils";
import { AppSyncRuntime } from "./appsyncruntime";
import { SyncConfig } from "./syncconfig";
/**
 * A function is a reusable entity. You can use multiple functions to compose the resolver logic.
 */
export declare class FunctionConfiguration extends SpeakeasyBase {
    code?: string;
    dataSourceName?: string;
    description?: string;
    functionArn?: string;
    functionId?: string;
    functionVersion?: string;
    maxBatchSize?: number;
    name?: string;
    requestMappingTemplate?: string;
    responseMappingTemplate?: string;
    /**
     * Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
     */
    runtime?: AppSyncRuntime;
    /**
     * <p>Describes a Sync configuration for a resolver.</p> <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</p>
     */
    syncConfig?: SyncConfig;
}
