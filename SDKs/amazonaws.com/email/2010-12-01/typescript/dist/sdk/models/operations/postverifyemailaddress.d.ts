import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTVerifyEmailAddressActionEnum {
    VerifyEmailAddress = "VerifyEmailAddress"
}
export declare enum POSTVerifyEmailAddressVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTVerifyEmailAddressRequest extends SpeakeasyBase {
    action: POSTVerifyEmailAddressActionEnum;
    requestBody?: Uint8Array;
    version: POSTVerifyEmailAddressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTVerifyEmailAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
