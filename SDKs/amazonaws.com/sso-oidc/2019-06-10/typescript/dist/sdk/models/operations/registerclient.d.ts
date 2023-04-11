import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RegisterClientRequestBody extends SpeakeasyBase {
    /**
     * The friendly name of the client.
     */
    clientName: string;
    /**
     * The type of client. The service supports only <code>public</code> as a client type. Anything other than public will be rejected by the service.
     */
    clientType: string;
    /**
     * The list of scopes that are defined by the client. Upon authorization, this list is used to restrict permissions when granting an access token.
     */
    scopes?: string[];
}
export declare class RegisterClientRequest extends SpeakeasyBase {
    requestBody: RegisterClientRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RegisterClientResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidClientMetadataException
     */
    invalidClientMetadataException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * InvalidScopeException
     */
    invalidScopeException?: any;
    /**
     * Success
     */
    registerClientResponse?: shared.RegisterClientResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
