import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteCoipPoolActionEnum {
    DeleteCoipPool = "DeleteCoipPool"
}
export declare enum POSTDeleteCoipPoolVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteCoipPoolRequest extends SpeakeasyBase {
    action: POSTDeleteCoipPoolActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteCoipPoolVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteCoipPoolResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
