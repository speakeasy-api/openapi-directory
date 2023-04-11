import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeAccountLimitsActionEnum {
    DescribeAccountLimits = "DescribeAccountLimits"
}
export declare enum POSTDescribeAccountLimitsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class POSTDescribeAccountLimitsRequest extends SpeakeasyBase {
    action: POSTDescribeAccountLimitsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeAccountLimitsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeAccountLimitsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
