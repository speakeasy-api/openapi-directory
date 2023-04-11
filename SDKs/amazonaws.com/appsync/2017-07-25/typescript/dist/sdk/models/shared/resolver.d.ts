import { SpeakeasyBase } from "../../../internal/utils";
import { AppSyncRuntime } from "./appsyncruntime";
import { CachingConfig } from "./cachingconfig";
import { PipelineConfig } from "./pipelineconfig";
import { ResolverKindEnum } from "./resolverkindenum";
import { SyncConfig } from "./syncconfig";
/**
 * Describes a resolver.
 */
export declare class Resolver extends SpeakeasyBase {
    cachingConfig?: CachingConfig;
    code?: string;
    dataSourceName?: string;
    fieldName?: string;
    kind?: ResolverKindEnum;
    maxBatchSize?: number;
    pipelineConfig?: PipelineConfig;
    requestMappingTemplate?: string;
    resolverArn?: string;
    responseMappingTemplate?: string;
    /**
     * Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
     */
    runtime?: AppSyncRuntime;
    syncConfig?: SyncConfig;
    typeName?: string;
}
