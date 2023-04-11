import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeAlarmsActionEnum {
    DescribeAlarms = "DescribeAlarms"
}
export declare enum POSTDescribeAlarmsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTDescribeAlarmsRequest extends SpeakeasyBase {
    action: POSTDescribeAlarmsActionEnum;
    /**
     * Pagination limit
     */
    maxRecords?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeAlarmsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeAlarmsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
