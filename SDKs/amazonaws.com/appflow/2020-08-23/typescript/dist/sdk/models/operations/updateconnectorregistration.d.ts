import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Contains information about the configuration of the connector being registered.
 */
export declare class UpdateConnectorRegistrationRequestBodyConnectorProvisioningConfig extends SpeakeasyBase {
    lambda?: shared.LambdaConnectorProvisioningConfig;
}
export declare class UpdateConnectorRegistrationRequestBody extends SpeakeasyBase {
    /**
     * The name of the connector. The name is unique for each connector registration in your AWS account.
     */
    connectorLabel: string;
    /**
     * Contains information about the configuration of the connector being registered.
     */
    connectorProvisioningConfig?: UpdateConnectorRegistrationRequestBodyConnectorProvisioningConfig;
    /**
     * A description about the update that you're applying to the connector.
     */
    description?: string;
}
export declare class UpdateConnectorRegistrationRequest extends SpeakeasyBase {
    requestBody: UpdateConnectorRegistrationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateConnectorRegistrationResponse extends SpeakeasyBase {
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateConnectorRegistrationResponse?: shared.UpdateConnectorRegistrationResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
