import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeTargetGroupsActionEnum {
    DescribeTargetGroups = "DescribeTargetGroups"
}
export declare enum POSTDescribeTargetGroupsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class POSTDescribeTargetGroupsRequest extends SpeakeasyBase {
    action: POSTDescribeTargetGroupsActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeTargetGroupsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeTargetGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
