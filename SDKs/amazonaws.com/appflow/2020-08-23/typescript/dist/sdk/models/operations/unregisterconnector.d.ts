import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnregisterConnectorRequestBody extends SpeakeasyBase {
    /**
     * The label of the connector. The label is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account.
     */
    connectorLabel: string;
    /**
     * Indicates whether Amazon AppFlow should unregister the connector, even if it is currently in use in one or more connector profiles. The default value is false.
     */
    forceDelete?: boolean;
}
export declare class UnregisterConnectorRequest extends SpeakeasyBase {
    requestBody: UnregisterConnectorRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UnregisterConnectorResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
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
    unregisterConnectorResponse?: Record<string, any>;
}
