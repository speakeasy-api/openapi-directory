import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeEventCategoriesActionEnum {
    DescribeEventCategories = "DescribeEventCategories"
}
export declare enum POSTDescribeEventCategoriesVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class POSTDescribeEventCategoriesRequest extends SpeakeasyBase {
    action: POSTDescribeEventCategoriesActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeEventCategoriesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeEventCategoriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
