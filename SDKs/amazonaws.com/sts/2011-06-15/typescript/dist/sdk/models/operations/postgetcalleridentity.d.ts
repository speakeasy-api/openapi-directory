import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetCallerIdentityActionEnum {
    GetCallerIdentity = "GetCallerIdentity"
}
export declare enum POSTGetCallerIdentityVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}
export declare class POSTGetCallerIdentityRequest extends SpeakeasyBase {
    action: POSTGetCallerIdentityActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetCallerIdentityVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetCallerIdentityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
