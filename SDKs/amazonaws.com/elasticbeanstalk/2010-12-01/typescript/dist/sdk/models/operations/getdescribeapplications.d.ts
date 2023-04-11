import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeApplicationsActionEnum {
    DescribeApplications = "DescribeApplications"
}
export declare enum GETDescribeApplicationsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETDescribeApplicationsRequest extends SpeakeasyBase {
    action: GETDescribeApplicationsActionEnum;
    /**
     * If specified, AWS Elastic Beanstalk restricts the returned descriptions to only include those with the specified names.
     */
    applicationNames?: string[];
    version: GETDescribeApplicationsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeApplicationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
