import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETVerifyEmailIdentityActionEnum {
    VerifyEmailIdentity = "VerifyEmailIdentity"
}
export declare enum GETVerifyEmailIdentityVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETVerifyEmailIdentityRequest extends SpeakeasyBase {
    action: GETVerifyEmailIdentityActionEnum;
    /**
     * The email address to be verified.
     */
    emailAddress: string;
    version: GETVerifyEmailIdentityVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETVerifyEmailIdentityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
