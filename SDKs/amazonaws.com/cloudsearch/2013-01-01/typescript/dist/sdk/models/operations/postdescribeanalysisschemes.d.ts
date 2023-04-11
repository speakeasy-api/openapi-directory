import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeAnalysisSchemesActionEnum {
    DescribeAnalysisSchemes = "DescribeAnalysisSchemes"
}
export declare enum POSTDescribeAnalysisSchemesVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class POSTDescribeAnalysisSchemesRequest extends SpeakeasyBase {
    action: POSTDescribeAnalysisSchemesActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeAnalysisSchemesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeAnalysisSchemesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
