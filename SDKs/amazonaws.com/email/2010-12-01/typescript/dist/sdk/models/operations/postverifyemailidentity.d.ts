import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTVerifyEmailIdentityActionEnum {
    VerifyEmailIdentity = "VerifyEmailIdentity"
}
export declare enum POSTVerifyEmailIdentityVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTVerifyEmailIdentityRequest extends SpeakeasyBase {
    action: POSTVerifyEmailIdentityActionEnum;
    requestBody?: Uint8Array;
    version: POSTVerifyEmailIdentityVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTVerifyEmailIdentityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
