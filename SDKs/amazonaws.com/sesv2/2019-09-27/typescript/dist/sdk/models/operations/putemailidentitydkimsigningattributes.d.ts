import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object that contains configuration for Bring Your Own DKIM (BYODKIM), or, for Easy DKIM
 */
export declare class PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes extends SpeakeasyBase {
    domainSigningPrivateKey?: string;
    domainSigningSelector?: string;
    nextSigningKeyLength?: shared.DkimSigningKeyLengthEnum;
}
/**
 * <p>The method to use to configure DKIM for the identity. There are the following possible values:</p> <ul> <li> <p> <code>AWS_SES</code> – Configure DKIM for the identity by using <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p> </li> <li> <p> <code>EXTERNAL</code> – Configure DKIM for the identity by using Bring Your Own DKIM (BYODKIM).</p> </li> </ul>
 */
export declare enum PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnum {
    AwsSes = "AWS_SES",
    External = "EXTERNAL"
}
export declare class PutEmailIdentityDkimSigningAttributesRequestBody extends SpeakeasyBase {
    /**
     * An object that contains configuration for Bring Your Own DKIM (BYODKIM), or, for Easy DKIM
     */
    signingAttributes?: PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes;
    /**
     * <p>The method to use to configure DKIM for the identity. There are the following possible values:</p> <ul> <li> <p> <code>AWS_SES</code> – Configure DKIM for the identity by using <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p> </li> <li> <p> <code>EXTERNAL</code> – Configure DKIM for the identity by using Bring Your Own DKIM (BYODKIM).</p> </li> </ul>
     */
    signingAttributesOrigin: PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnum;
}
export declare class PutEmailIdentityDkimSigningAttributesRequest extends SpeakeasyBase {
    /**
     * The email identity.
     */
    emailIdentity: string;
    requestBody: PutEmailIdentityDkimSigningAttributesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutEmailIdentityDkimSigningAttributesResponse extends SpeakeasyBase {
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
    putEmailIdentityDkimSigningAttributesResponse?: shared.PutEmailIdentityDkimSigningAttributesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
