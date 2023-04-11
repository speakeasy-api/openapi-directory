import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The language you would prefer to be contacted with.
 */
export declare enum PutAccountDetailsRequestBodyContactLanguageEnum {
    En = "EN",
    Ja = "JA"
}
/**
 * The type of email your account will send.
 */
export declare enum PutAccountDetailsRequestBodyMailTypeEnum {
    Marketing = "MARKETING",
    Transactional = "TRANSACTIONAL"
}
export declare class PutAccountDetailsRequestBody extends SpeakeasyBase {
    /**
     * Additional email addresses that you would like to be notified regarding Amazon SES matters.
     */
    additionalContactEmailAddresses?: string[];
    /**
     * The language you would prefer to be contacted with.
     */
    contactLanguage?: PutAccountDetailsRequestBodyContactLanguageEnum;
    /**
     * The type of email your account will send.
     */
    mailType: PutAccountDetailsRequestBodyMailTypeEnum;
    /**
     * <p>Indicates whether or not your account should have production access in the current Amazon Web Services Region.</p> <p>If the value is <code>false</code>, then your account is in the <i>sandbox</i>. When your account is in the sandbox, you can only send email to verified identities. Additionally, the maximum number of emails you can send in a 24-hour period (your sending quota) is 200, and the maximum number of emails you can send per second (your maximum sending rate) is 1.</p> <p>If the value is <code>true</code>, then your account has production access. When your account has production access, you can send email to any address. The sending quota and maximum sending rate for your account vary based on your specific use case.</p>
     */
    productionAccessEnabled?: boolean;
    /**
     * A description of the types of email that you plan to send.
     */
    useCaseDescription: string;
    /**
     * The URL of your website. This information helps us better understand the type of content that you plan to send.
     */
    websiteURL: string;
}
export declare class PutAccountDetailsRequest extends SpeakeasyBase {
    requestBody: PutAccountDetailsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutAccountDetailsResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    putAccountDetailsResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
