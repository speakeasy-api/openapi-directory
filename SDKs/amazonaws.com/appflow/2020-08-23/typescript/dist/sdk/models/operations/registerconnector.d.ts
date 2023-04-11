import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Contains information about the configuration of the connector being registered.
 */
export declare class RegisterConnectorRequestBodyConnectorProvisioningConfig extends SpeakeasyBase {
    lambda?: shared.LambdaConnectorProvisioningConfig;
}
/**
 * The type of provisioning that the connector supports, such as Lambda.
 */
export declare enum RegisterConnectorRequestBodyConnectorProvisioningTypeEnum {
    Lambda = "LAMBDA"
}
export declare class RegisterConnectorRequestBody extends SpeakeasyBase {
    /**
     *  The name of the connector. The name is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account.
     */
    connectorLabel?: string;
    /**
     * Contains information about the configuration of the connector being registered.
     */
    connectorProvisioningConfig?: RegisterConnectorRequestBodyConnectorProvisioningConfig;
    /**
     * The type of provisioning that the connector supports, such as Lambda.
     */
    connectorProvisioningType?: RegisterConnectorRequestBodyConnectorProvisioningTypeEnum;
    /**
     * A description about the connector that's being registered.
     */
    description?: string;
}
export declare class RegisterConnectorRequest extends SpeakeasyBase {
    requestBody: RegisterConnectorRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RegisterConnectorResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
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
    /**
     * Success
     */
    registerConnectorResponse?: shared.RegisterConnectorResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
