import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeAggregateIdFormatActionEnum {
    DescribeAggregateIdFormat = "DescribeAggregateIdFormat"
}
export declare enum POSTDescribeAggregateIdFormatVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeAggregateIdFormatRequest extends SpeakeasyBase {
    action: POSTDescribeAggregateIdFormatActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeAggregateIdFormatVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeAggregateIdFormatResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
