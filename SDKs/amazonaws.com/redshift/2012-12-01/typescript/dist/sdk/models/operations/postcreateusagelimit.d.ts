import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateUsageLimitActionEnum {
    CreateUsageLimit = "CreateUsageLimit"
}
export declare enum POSTCreateUsageLimitVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTCreateUsageLimitRequest extends SpeakeasyBase {
    action: POSTCreateUsageLimitActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateUsageLimitVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateUsageLimitResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
