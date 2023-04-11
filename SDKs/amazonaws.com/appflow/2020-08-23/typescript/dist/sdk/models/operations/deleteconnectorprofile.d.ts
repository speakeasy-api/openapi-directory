import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteConnectorProfileRequestBody extends SpeakeasyBase {
    /**
     *  The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in your account.
     */
    connectorProfileName: string;
    /**
     *  Indicates whether Amazon AppFlow should delete the profile, even if it is currently in use in one or more flows.
     */
    forceDelete?: boolean;
}
export declare class DeleteConnectorProfileRequest extends SpeakeasyBase {
    requestBody: DeleteConnectorProfileRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteConnectorProfileResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteConnectorProfileResponse?: Record<string, any>;
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
}
