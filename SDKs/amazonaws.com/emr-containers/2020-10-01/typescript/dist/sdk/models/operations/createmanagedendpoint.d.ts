import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A configuration specification to be used to override existing configurations.
 */
export declare class CreateManagedEndpointRequestBodyConfigurationOverrides extends SpeakeasyBase {
    applicationConfiguration?: shared.Configuration[];
    monitoringConfiguration?: shared.MonitoringConfiguration;
}
export declare class CreateManagedEndpointRequestBody extends SpeakeasyBase {
    /**
     * The certificate ARN provided by users for the managed endpoint. This field is under deprecation and will be removed in future releases.
     */
    certificateArn?: string;
    /**
     * The client idempotency token for this create call.
     */
    clientToken: string;
    /**
     * A configuration specification to be used to override existing configurations.
     */
    configurationOverrides?: CreateManagedEndpointRequestBodyConfigurationOverrides;
    /**
     * The ARN of the execution role.
     */
    executionRoleArn: string;
    /**
     * The name of the managed endpoint.
     */
    name: string;
    /**
     * The Amazon EMR release version.
     */
    releaseLabel: string;
    /**
     * The tags of the managed endpoint.
     */
    tags?: Record<string, string>;
    /**
     * The type of the managed endpoint.
     */
    type: string;
}
export declare class CreateManagedEndpointRequest extends SpeakeasyBase {
    requestBody: CreateManagedEndpointRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the virtual cluster for which a managed endpoint is created.
     */
    virtualClusterId: string;
}
export declare class CreateManagedEndpointResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createManagedEndpointResponse?: shared.CreateManagedEndpointResponse;
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
     * ValidationException
     */
    validationException?: any;
}
