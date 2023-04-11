import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETSendCustomVerificationEmailActionEnum {
    SendCustomVerificationEmail = "SendCustomVerificationEmail"
}
export declare enum GETSendCustomVerificationEmailVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETSendCustomVerificationEmailRequest extends SpeakeasyBase {
    action: GETSendCustomVerificationEmailActionEnum;
    /**
     * Name of a configuration set to use when sending the verification email.
     */
    configurationSetName?: string;
    /**
     * The email address to verify.
     */
    emailAddress: string;
    /**
     * The name of the custom verification email template to use when sending the verification email.
     */
    templateName: string;
    version: GETSendCustomVerificationEmailVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETSendCustomVerificationEmailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
