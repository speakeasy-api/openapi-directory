import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeDBLogFilesActionEnum {
    DescribeDBLogFiles = "DescribeDBLogFiles"
}
export declare enum POSTDescribeDBLogFilesVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class POSTDescribeDBLogFilesRequest extends SpeakeasyBase {
    action: POSTDescribeDBLogFilesActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeDBLogFilesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeDBLogFilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
