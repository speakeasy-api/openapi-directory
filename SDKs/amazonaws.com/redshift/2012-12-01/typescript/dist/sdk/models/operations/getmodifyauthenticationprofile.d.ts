import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyAuthenticationProfileActionEnum {
    ModifyAuthenticationProfile = "ModifyAuthenticationProfile"
}
export declare enum GETModifyAuthenticationProfileVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETModifyAuthenticationProfileRequest extends SpeakeasyBase {
    action: GETModifyAuthenticationProfileActionEnum;
    /**
     * The new content of the authentication profile in JSON format. The maximum length of the JSON string is determined by a quota for your account.
     */
    authenticationProfileContent: string;
    /**
     * The name of the authentication profile to replace.
     */
    authenticationProfileName: string;
    version: GETModifyAuthenticationProfileVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyAuthenticationProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
