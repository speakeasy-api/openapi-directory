import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateCoipPoolActionEnum {
    CreateCoipPool = "CreateCoipPool"
}
export declare enum POSTCreateCoipPoolVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateCoipPoolRequest extends SpeakeasyBase {
    action: POSTCreateCoipPoolActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateCoipPoolVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateCoipPoolResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
