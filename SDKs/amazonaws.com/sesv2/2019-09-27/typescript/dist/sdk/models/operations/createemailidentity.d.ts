import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object that contains configuration for Bring Your Own DKIM (BYODKIM), or, for Easy DKIM
 */
export declare class CreateEmailIdentityRequestBodyDkimSigningAttributes extends SpeakeasyBase {
    domainSigningPrivateKey?: string;
    domainSigningSelector?: string;
    nextSigningKeyLength?: shared.DkimSigningKeyLengthEnum;
}
export declare class CreateEmailIdentityRequestBody extends SpeakeasyBase {
    /**
     * <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
     */
    configurationSetName?: string;
    /**
     * An object that contains configuration for Bring Your Own DKIM (BYODKIM), or, for Easy DKIM
     */
    dkimSigningAttributes?: CreateEmailIdentityRequestBodyDkimSigningAttributes;
    /**
     * The email address or domain to verify.
     */
    emailIdentity: string;
    /**
     * An array of objects that define the tags (keys and values) to associate with the email identity.
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
     * AlreadyExistsException
     */
    alreadyExistsException?: any;
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
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
