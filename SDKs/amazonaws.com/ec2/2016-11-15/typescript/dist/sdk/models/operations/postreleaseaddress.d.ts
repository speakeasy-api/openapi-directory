import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTReleaseAddressActionEnum {
    ReleaseAddress = "ReleaseAddress"
}
export declare enum POSTReleaseAddressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTReleaseAddressRequest extends SpeakeasyBase {
    action: POSTReleaseAddressActionEnum;
    requestBody?: Uint8Array;
    version: POSTReleaseAddressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTReleaseAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
