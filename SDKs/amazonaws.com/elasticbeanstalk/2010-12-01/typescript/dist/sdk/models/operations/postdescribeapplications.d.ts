import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeApplicationsActionEnum {
    DescribeApplications = "DescribeApplications"
}
export declare enum POSTDescribeApplicationsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTDescribeApplicationsRequest extends SpeakeasyBase {
    action: POSTDescribeApplicationsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeApplicationsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeApplicationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
