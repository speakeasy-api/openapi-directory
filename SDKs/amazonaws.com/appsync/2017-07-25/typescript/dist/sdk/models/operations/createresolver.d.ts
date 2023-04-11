import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The caching configuration for a resolver that has caching activated.
 */
export declare class CreateResolverRequestBodyCachingConfig extends SpeakeasyBase {
    cachingKeys?: string[];
    ttl?: number;
}
/**
 * <p>The resolver type.</p> <ul> <li> <p> <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source.</p> </li> <li> <p> <b>PIPELINE</b>: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of <code>Function</code> objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources.</p> </li> </ul>
 */
export declare enum CreateResolverRequestBodyKindEnum {
    Unit = "UNIT",
    Pipeline = "PIPELINE"
}
/**
 * The pipeline configuration for a resolver of kind <code>PIPELINE</code>.
 */
export declare class CreateResolverRequestBodyPipelineConfig extends SpeakeasyBase {
    functions?: string[];
}
/**
 * Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
 */
export declare class CreateResolverRequestBodyRuntime extends SpeakeasyBase {
    name?: shared.RuntimeNameEnum;
    runtimeVersion?: string;
}
/**
 * <p>Describes a Sync configuration for a resolver.</p> <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</p>
 */
export declare class CreateResolverRequestBodySyncConfig extends SpeakeasyBase {
    conflictDetection?: shared.ConflictDetectionTypeEnum;
    conflictHandler?: shared.ConflictHandlerTypeEnum;
    lambdaConflictHandlerConfig?: shared.LambdaConflictHandlerConfig;
}
export declare class CreateResolverRequestBody extends SpeakeasyBase {
    /**
     * The caching configuration for a resolver that has caching activated.
     */
    cachingConfig?: CreateResolverRequestBodyCachingConfig;
    /**
     * The <code>resolver</code> code that contains the request and response functions. When code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be <code>APPSYNC_JS</code>.
     */
    code?: string;
    /**
     * The name of the data source for which the resolver is being created.
     */
    dataSourceName?: string;
    /**
     * The name of the field to attach the resolver to.
     */
    fieldName: string;
    /**
     * <p>The resolver type.</p> <ul> <li> <p> <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source.</p> </li> <li> <p> <b>PIPELINE</b>: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of <code>Function</code> objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources.</p> </li> </ul>
     */
    kind?: CreateResolverRequestBodyKindEnum;
    /**
     * The maximum batching size for a resolver.
     */
    maxBatchSize?: number;
    /**
     * The pipeline configuration for a resolver of kind <code>PIPELINE</code>.
     */
    pipelineConfig?: CreateResolverRequestBodyPipelineConfig;
    /**
     * <p>The mapping template to use for requests.</p> <p>A resolver uses a request mapping template to convert a GraphQL expression into a format that a data source can understand. Mapping templates are written in Apache Velocity Template Language (VTL).</p> <p>VTL request mapping templates are optional when using an Lambda data source. For all other data sources, VTL request and response mapping templates are required.</p>
     */
    requestMappingTemplate?: string;
    /**
     * The mapping template to use for responses from the data source.
     */
    responseMappingTemplate?: string;
    /**
     * Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
     */
    runtime?: CreateResolverRequestBodyRuntime;
    /**
     * <p>Describes a Sync configuration for a resolver.</p> <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</p>
     */
    syncConfig?: CreateResolverRequestBodySyncConfig;
}
export declare class CreateResolverRequest extends SpeakeasyBase {
    requestBody: CreateResolverRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID for the GraphQL API for which the resolver is being created.
     */
    apiId: string;
    /**
     * The name of the <code>Type</code>.
     */
    typeName: string;
}
export declare class CreateResolverResponse extends SpeakeasyBase {
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
     * Success
     */
    createResolverResponse?: shared.CreateResolverResponse;
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
}
