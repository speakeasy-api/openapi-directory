import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutEmailIdentityDkimAttributesRequestBody extends SpeakeasyBase {
    /**
     * <p>Sets the DKIM signing configuration for the identity.</p> <p>When you set this value <code>true</code>, then the messages that are sent from the identity are signed using DKIM. If you set this value to <code>false</code>, your messages are sent without DKIM signing.</p>
     */
    signingEnabled?: boolean;
}
export declare class PutEmailIdentityDkimAttributesRequest extends SpeakeasyBase {
    /**
     * The email identity.
     */
    emailIdentity: string;
    requestBody: PutEmailIdentityDkimAttributesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutEmailIdentityDkimAttributesResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * Success
     */
    putEmailIdentityDkimAttributesResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
