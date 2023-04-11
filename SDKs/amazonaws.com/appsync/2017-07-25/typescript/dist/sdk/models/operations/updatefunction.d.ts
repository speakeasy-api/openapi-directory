import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
 */
export declare class UpdateFunctionRequestBodyRuntime extends SpeakeasyBase {
    name?: shared.RuntimeNameEnum;
    runtimeVersion?: string;
}
/**
 * <p>Describes a Sync configuration for a resolver.</p> <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</p>
 */
export declare class UpdateFunctionRequestBodySyncConfig extends SpeakeasyBase {
    conflictDetection?: shared.ConflictDetectionTypeEnum;
    conflictHandler?: shared.ConflictHandlerTypeEnum;
    lambdaConflictHandlerConfig?: shared.LambdaConflictHandlerConfig;
}
export declare class UpdateFunctionRequestBody extends SpeakeasyBase {
    /**
     * The <code>function</code> code that contains the request and response functions. When code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be <code>APPSYNC_JS</code>.
     */
    code?: string;
    /**
     * The <code>Function</code> <code>DataSource</code> name.
     */
    dataSourceName: string;
    /**
     * The <code>Function</code> description.
     */
    description?: string;
    /**
     * The <code>version</code> of the request mapping template. Currently, the supported value is 2018-05-29. Note that when using VTL and mapping templates, the <code>functionVersion</code> is required.
     */
    functionVersion?: string;
    /**
     * The maximum batching size for a resolver.
     */
    maxBatchSize?: number;
    /**
     * The <code>Function</code> name.
     */
    name: string;
    /**
     * The <code>Function</code> request mapping template. Functions support only the 2018-05-29 version of the request mapping template.
     */
    requestMappingTemplate?: string;
    /**
     * The <code>Function</code> request mapping template.
     */
    responseMappingTemplate?: string;
    /**
     * Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
     */
    runtime?: UpdateFunctionRequestBodyRuntime;
    /**
     * <p>Describes a Sync configuration for a resolver.</p> <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</p>
     */
    syncConfig?: UpdateFunctionRequestBodySyncConfig;
}
export declare class UpdateFunctionRequest extends SpeakeasyBase {
    requestBody: UpdateFunctionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The GraphQL API ID.
     */
    apiId: string;
    /**
     * The function ID.
     */
    functionId: string;
}
export declare class UpdateFunctionResponse extends SpeakeasyBase {
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
    updateFunctionResponse?: shared.UpdateFunctionResponse;
}
