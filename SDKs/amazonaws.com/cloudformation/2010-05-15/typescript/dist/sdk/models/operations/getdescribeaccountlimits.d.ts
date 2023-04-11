import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeAccountLimitsActionEnum {
    DescribeAccountLimits = "DescribeAccountLimits"
}
export declare enum GETDescribeAccountLimitsVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETDescribeAccountLimitsRequest extends SpeakeasyBase {
    action: GETDescribeAccountLimitsActionEnum;
    /**
     * A string that identifies the next page of limits that you want to retrieve.
     */
    nextToken?: string;
    version: GETDescribeAccountLimitsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeAccountLimitsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
