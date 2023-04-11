import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeDBLogFilesActionEnum {
    DescribeDBLogFiles = "DescribeDBLogFiles"
}
export declare enum GETDescribeDBLogFilesVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GETDescribeDBLogFilesRequest extends SpeakeasyBase {
    action: GETDescribeDBLogFilesActionEnum;
    dbInstanceIdentifier: string;
    fileLastWritten?: number;
    fileSize?: number;
    filenameContains?: string;
    marker?: string;
    maxRecords?: number;
    version: GETDescribeDBLogFilesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeDBLogFilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
