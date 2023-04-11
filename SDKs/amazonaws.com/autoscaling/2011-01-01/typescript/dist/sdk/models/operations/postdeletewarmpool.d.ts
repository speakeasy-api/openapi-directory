import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteWarmPoolActionEnum {
    DeleteWarmPool = "DeleteWarmPool"
}
export declare enum POSTDeleteWarmPoolVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTDeleteWarmPoolRequest extends SpeakeasyBase {
    action: POSTDeleteWarmPoolActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteWarmPoolVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteWarmPoolResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
