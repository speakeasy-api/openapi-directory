import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeAlarmsForMetricActionEnum {
    DescribeAlarmsForMetric = "DescribeAlarmsForMetric"
}
export declare enum POSTDescribeAlarmsForMetricVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTDescribeAlarmsForMetricRequest extends SpeakeasyBase {
    action: POSTDescribeAlarmsForMetricActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeAlarmsForMetricVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeAlarmsForMetricResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
