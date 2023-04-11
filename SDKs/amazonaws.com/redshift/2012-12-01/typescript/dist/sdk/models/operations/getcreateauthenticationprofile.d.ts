import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateAuthenticationProfileActionEnum {
    CreateAuthenticationProfile = "CreateAuthenticationProfile"
}
export declare enum GETCreateAuthenticationProfileVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETCreateAuthenticationProfileRequest extends SpeakeasyBase {
    action: GETCreateAuthenticationProfileActionEnum;
    /**
     * The content of the authentication profile in JSON format. The maximum length of the JSON string is determined by a quota for your account.
     */
    authenticationProfileContent: string;
    /**
     * The name of the authentication profile to be created.
     */
    authenticationProfileName: string;
    version: GETCreateAuthenticationProfileVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateAuthenticationProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
