import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The caching configuration for a resolver that has caching activated.
 */
export declare class UpdateResolverRequestBodyCachingConfig extends SpeakeasyBase {
    cachingKeys?: string[];
    ttl?: number;
}
/**
 * <p>The resolver type.</p> <ul> <li> <p> <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source.</p> </li> <li> <p> <b>PIPELINE</b>: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of <code>Function</code> objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources.</p> </li> </ul>
 */
export declare enum UpdateResolverRequestBodyKindEnum {
    Unit = "UNIT",
    Pipeline = "PIPELINE"
}
/**
 * The pipeline configuration for a resolver of kind <code>PIPELINE</code>.
 */
export declare class UpdateResolverRequestBodyPipelineConfig extends SpeakeasyBase {
    functions?: string[];
}
/**
 * Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
 */
export declare class UpdateResolverRequestBodyRuntime extends SpeakeasyBase {
    name?: shared.RuntimeNameEnum;
    runtimeVersion?: string;
}
/**
 * <p>Describes a Sync configuration for a resolver.</p> <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</p>
 */
export declare class UpdateResolverRequestBodySyncConfig extends SpeakeasyBase {
    conflictDetection?: shared.ConflictDetectionTypeEnum;
    conflictHandler?: shared.ConflictHandlerTypeEnum;
    lambdaConflictHandlerConfig?: shared.LambdaConflictHandlerConfig;
}
export declare class UpdateResolverRequestBody extends SpeakeasyBase {
    /**
     * The caching configuration for a resolver that has caching activated.
     */
    cachingConfig?: UpdateResolverRequestBodyCachingConfig;
    /**
     * The <code>resolver</code> code that contains the request and response functions. When code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be <code>APPSYNC_JS</code>.
     */
    code?: string;
    /**
     * The new data source name.
     */
    dataSourceName?: string;
    /**
     * <p>The resolver type.</p> <ul> <li> <p> <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source.</p> </li> <li> <p> <b>PIPELINE</b>: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of <code>Function</code> objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources.</p> </li> </ul>
     */
    kind?: UpdateResolverRequestBodyKindEnum;
    /**
     * The maximum batching size for a resolver.
     */
    maxBatchSize?: number;
    /**
     * The pipeline configuration for a resolver of kind <code>PIPELINE</code>.
     */
    pipelineConfig?: UpdateResolverRequestBodyPipelineConfig;
    /**
     * <p>The new request mapping template.</p> <p>A resolver uses a request mapping template to convert a GraphQL expression into a format that a data source can understand. Mapping templates are written in Apache Velocity Template Language (VTL).</p> <p>VTL request mapping templates are optional when using an Lambda data source. For all other data sources, VTL request and response mapping templates are required.</p>
     */
    requestMappingTemplate?: string;
    /**
     * The new response mapping template.
     */
    responseMappingTemplate?: string;
    /**
     * Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
     */
    runtime?: UpdateResolverRequestBodyRuntime;
    /**
     * <p>Describes a Sync configuration for a resolver.</p> <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</p>
     */
    syncConfig?: UpdateResolverRequestBodySyncConfig;
}
export declare class UpdateResolverRequest extends SpeakeasyBase {
    requestBody: UpdateResolverRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The API ID.
     */
    apiId: string;
    /**
     * The new field name.
     */
    fieldName: string;
    /**
     * The new type name.
     */
    typeName: string;
}
export declare class UpdateResolverResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * Success
     */
    updateResolverResponse?: shared.UpdateResolverResponse;
}
