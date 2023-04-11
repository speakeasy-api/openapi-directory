import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetSendStatisticsActionEnum {
    GetSendStatistics = "GetSendStatistics"
}
export declare enum POSTGetSendStatisticsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTGetSendStatisticsRequest extends SpeakeasyBase {
    action: POSTGetSendStatisticsActionEnum;
    version: POSTGetSendStatisticsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetSendStatisticsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
