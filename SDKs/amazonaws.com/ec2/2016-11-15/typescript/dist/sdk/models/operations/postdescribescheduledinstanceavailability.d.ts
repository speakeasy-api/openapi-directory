import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeScheduledInstanceAvailabilityActionEnum {
    DescribeScheduledInstanceAvailability = "DescribeScheduledInstanceAvailability"
}
export declare enum POSTDescribeScheduledInstanceAvailabilityVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeScheduledInstanceAvailabilityRequest extends SpeakeasyBase {
    action: POSTDescribeScheduledInstanceAvailabilityActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeScheduledInstanceAvailabilityVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeScheduledInstanceAvailabilityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
