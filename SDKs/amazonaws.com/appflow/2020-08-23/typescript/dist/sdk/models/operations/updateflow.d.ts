import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the configuration that Amazon AppFlow uses when it catalogs your data. When Amazon AppFlow catalogs your data, it stores metadata in a data catalog.
 */
export declare class UpdateFlowRequestBodyMetadataCatalogConfig extends SpeakeasyBase {
    glueDataCatalog?: shared.GlueDataCatalogConfig;
}
/**
 *  Contains information about the configuration of the source connector used in the flow.
 */
export declare class UpdateFlowRequestBodySourceFlowConfig extends SpeakeasyBase {
    apiVersion?: string;
    connectorProfileName?: string;
    connectorType?: shared.ConnectorTypeEnum;
    incrementalPullConfig?: shared.IncrementalPullConfig;
    sourceConnectorProperties?: shared.SourceConnectorProperties;
}
/**
 *  The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
 */
export declare class UpdateFlowRequestBodyTriggerConfig extends SpeakeasyBase {
    triggerProperties?: shared.TriggerProperties;
    triggerType?: shared.TriggerTypeEnum;
}
export declare class UpdateFlowRequestBody extends SpeakeasyBase {
    /**
     *  A description of the flow.
     */
    description?: string;
    /**
     *  The configuration that controls how Amazon AppFlow transfers data to the destination connector.
     */
    destinationFlowConfigList: shared.DestinationFlowConfig[];
    /**
     *  The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
     */
    flowName: string;
    /**
     * Specifies the configuration that Amazon AppFlow uses when it catalogs your data. When Amazon AppFlow catalogs your data, it stores metadata in a data catalog.
     */
    metadataCatalogConfig?: UpdateFlowRequestBodyMetadataCatalogConfig;
    /**
     *  Contains information about the configuration of the source connector used in the flow.
     */
    sourceFlowConfig: UpdateFlowRequestBodySourceFlowConfig;
    /**
     *  A list of tasks that Amazon AppFlow performs while transferring the data in the flow run.
     */
    tasks: shared.Task[];
    /**
     *  The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
     */
    triggerConfig: UpdateFlowRequestBodyTriggerConfig;
}
export declare class UpdateFlowRequest extends SpeakeasyBase {
    requestBody: UpdateFlowRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateFlowResponse extends SpeakeasyBase {
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
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * Success
     */
    updateFlowResponse?: shared.UpdateFlowResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
