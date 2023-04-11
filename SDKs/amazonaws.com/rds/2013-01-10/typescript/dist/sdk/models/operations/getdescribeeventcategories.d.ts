import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeEventCategoriesActionEnum {
    DescribeEventCategories = "DescribeEventCategories"
}
export declare enum GETDescribeEventCategoriesVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GETDescribeEventCategoriesRequest extends SpeakeasyBase {
    action: GETDescribeEventCategoriesActionEnum;
    sourceType?: string;
    version: GETDescribeEventCategoriesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeEventCategoriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
