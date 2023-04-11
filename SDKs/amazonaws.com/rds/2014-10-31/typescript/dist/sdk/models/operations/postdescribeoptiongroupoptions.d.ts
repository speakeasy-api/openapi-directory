import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeOptionGroupOptionsActionEnum {
    DescribeOptionGroupOptions = "DescribeOptionGroupOptions"
}
export declare enum POSTDescribeOptionGroupOptionsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTDescribeOptionGroupOptionsRequest extends SpeakeasyBase {
    action: POSTDescribeOptionGroupOptionsActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxRecords?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeOptionGroupOptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeOptionGroupOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
