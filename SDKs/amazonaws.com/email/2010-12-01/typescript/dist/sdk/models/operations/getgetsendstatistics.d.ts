import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETSendStatisticsActionEnum {
    GetSendStatistics = "GetSendStatistics"
}
export declare enum GETGETSendStatisticsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETGETSendStatisticsRequest extends SpeakeasyBase {
    action: GETGETSendStatisticsActionEnum;
    version: GETGETSendStatisticsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETSendStatisticsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
