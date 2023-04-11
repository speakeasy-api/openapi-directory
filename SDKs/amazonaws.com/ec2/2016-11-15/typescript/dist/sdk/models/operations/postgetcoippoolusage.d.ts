import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetCoipPoolUsageActionEnum {
    GetCoipPoolUsage = "GetCoipPoolUsage"
}
export declare enum POSTGetCoipPoolUsageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTGetCoipPoolUsageRequest extends SpeakeasyBase {
    action: POSTGetCoipPoolUsageActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetCoipPoolUsageVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetCoipPoolUsageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
