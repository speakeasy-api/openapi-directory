import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTPutMetricDataActionEnum {
    PutMetricData = "PutMetricData"
}
export declare enum POSTPutMetricDataVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTPutMetricDataRequest extends SpeakeasyBase {
    action: POSTPutMetricDataActionEnum;
    requestBody?: Uint8Array;
    version: POSTPutMetricDataVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTPutMetricDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
