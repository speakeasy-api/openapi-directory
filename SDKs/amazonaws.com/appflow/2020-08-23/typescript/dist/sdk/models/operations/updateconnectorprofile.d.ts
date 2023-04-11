import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  Indicates the connection mode and if it is public or private.
 */
export declare enum UpdateConnectorProfileRequestBodyConnectionModeEnum {
    Public = "Public",
    Private = "Private"
}
/**
 *  Defines the connector-specific configuration and credentials for the connector profile.
 */
export declare class UpdateConnectorProfileRequestBodyConnectorProfileConfig extends SpeakeasyBase {
    connectorProfileCredentials?: shared.ConnectorProfileCredentials;
    connectorProfileProperties?: shared.ConnectorProfileProperties;
}
export declare class UpdateConnectorProfileRequestBody extends SpeakeasyBase {
    /**
     *  Indicates the connection mode and if it is public or private.
     */
    connectionMode: UpdateConnectorProfileRequestBodyConnectionModeEnum;
    /**
     *  Defines the connector-specific configuration and credentials for the connector profile.
     */
    connectorProfileConfig: UpdateConnectorProfileRequestBodyConnectorProfileConfig;
    /**
     *  The name of the connector profile and is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account.
     */
    connectorProfileName: string;
}
export declare class UpdateConnectorProfileRequest extends SpeakeasyBase {
    requestBody: UpdateConnectorProfileRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateConnectorProfileResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    /**
     * ConnectorAuthenticationException
     */
    connectorAuthenticationException?: any;
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
     * Success
     */
    updateConnectorProfileResponse?: shared.UpdateConnectorProfileResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
