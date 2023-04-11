import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The configuration sent to a cluster for configuration.
 */
export declare class RegisterClusterRequestBodyConnectorConfig extends SpeakeasyBase {
    provider?: shared.ConnectorConfigProviderEnum;
    roleArn?: string;
}
export declare class RegisterClusterRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: string;
    /**
     * The configuration sent to a cluster for configuration.
     */
    connectorConfig: RegisterClusterRequestBodyConnectorConfig;
    /**
     * Define a unique name for this cluster for your Region.
     */
    name: string;
    /**
     * The metadata that you apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Cluster tags do not propagate to any other resources associated with the cluster.
     */
    tags?: Record<string, string>;
}
export declare class RegisterClusterRequest extends SpeakeasyBase {
    requestBody: RegisterClusterRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RegisterClusterResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    registerClusterResponse?: shared.RegisterClusterResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
    /**
     * ResourcePropagationDelayException
     */
    resourcePropagationDelayException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
