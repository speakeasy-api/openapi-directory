import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETCallerIdentityActionEnum {
    GetCallerIdentity = "GetCallerIdentity"
}
export declare enum GETGETCallerIdentityVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}
export declare class GETGETCallerIdentityRequest extends SpeakeasyBase {
    action: GETGETCallerIdentityActionEnum;
    version: GETGETCallerIdentityVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETCallerIdentityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
