import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateEmailIdentityRequestBody extends SpeakeasyBase {
    /**
     * The email address or domain that you want to verify.
     */
    emailIdentity: string;
    /**
     * An array of objects that define the tags (keys and values) that you want to associate with the email identity.
     */
    tags?: shared.Tag[];
}
export declare class CreateEmailIdentityRequest extends SpeakeasyBase {
    requestBody: CreateEmailIdentityRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateEmailIdentityResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    createEmailIdentityResponse?: shared.CreateEmailIdentityResponse;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
