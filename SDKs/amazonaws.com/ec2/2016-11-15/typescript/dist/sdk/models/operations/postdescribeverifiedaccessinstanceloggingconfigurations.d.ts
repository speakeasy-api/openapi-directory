import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeVerifiedAccessInstanceLoggingConfigurationsActionEnum {
    DescribeVerifiedAccessInstanceLoggingConfigurations = "DescribeVerifiedAccessInstanceLoggingConfigurations"
}
export declare enum POSTDescribeVerifiedAccessInstanceLoggingConfigurationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeVerifiedAccessInstanceLoggingConfigurationsRequest extends SpeakeasyBase {
    action: POSTDescribeVerifiedAccessInstanceLoggingConfigurationsActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeVerifiedAccessInstanceLoggingConfigurationsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeVerifiedAccessInstanceLoggingConfigurationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
