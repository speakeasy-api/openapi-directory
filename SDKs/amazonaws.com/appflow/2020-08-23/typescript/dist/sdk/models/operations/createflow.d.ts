import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the configuration that Amazon AppFlow uses when it catalogs your data. When Amazon AppFlow catalogs your data, it stores metadata in a data catalog.
 */
export declare class CreateFlowRequestBodyMetadataCatalogConfig extends SpeakeasyBase {
    glueDataCatalog?: shared.GlueDataCatalogConfig;
}
/**
 *  Contains information about the configuration of the source connector used in the flow.
 */
export declare class CreateFlowRequestBodySourceFlowConfig extends SpeakeasyBase {
    apiVersion?: string;
    connectorProfileName?: string;
    connectorType?: shared.ConnectorTypeEnum;
    incrementalPullConfig?: shared.IncrementalPullConfig;
    sourceConnectorProperties?: shared.SourceConnectorProperties;
}
/**
 *  The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
 */
export declare class CreateFlowRequestBodyTriggerConfig extends SpeakeasyBase {
    triggerProperties?: shared.TriggerProperties;
    triggerType?: shared.TriggerTypeEnum;
}
export declare class CreateFlowRequestBody extends SpeakeasyBase {
    /**
     *  A description of the flow you want to create.
     */
    description?: string;
    /**
     *  The configuration that controls how Amazon AppFlow places data in the destination connector.
     */
    destinationFlowConfigList: shared.DestinationFlowConfig[];
    /**
     *  The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
     */
    flowName: string;
    /**
     *  The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key.
     */
    kmsArn?: string;
    /**
     * Specifies the configuration that Amazon AppFlow uses when it catalogs your data. When Amazon AppFlow catalogs your data, it stores metadata in a data catalog.
     */
    metadataCatalogConfig?: CreateFlowRequestBodyMetadataCatalogConfig;
    /**
     *  Contains information about the configuration of the source connector used in the flow.
     */
    sourceFlowConfig: CreateFlowRequestBodySourceFlowConfig;
    /**
     *  The tags used to organize, track, or control access for your flow.
     */
    tags?: Record<string, string>;
    /**
     *  A list of tasks that Amazon AppFlow performs while transferring the data in the flow run.
     */
    tasks: shared.Task[];
    /**
     *  The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
     */
    triggerConfig: CreateFlowRequestBodyTriggerConfig;
}
export declare class CreateFlowRequest extends SpeakeasyBase {
    requestBody: CreateFlowRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateFlowResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    /**
     * ConnectorAuthenticationException
     */
    connectorAuthenticationException?: any;
    /**
     * ConnectorServerException
     */
    connectorServerException?: any;
    contentType: string;
    /**
     * Success
     */
    createFlowResponse?: shared.CreateFlowResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
