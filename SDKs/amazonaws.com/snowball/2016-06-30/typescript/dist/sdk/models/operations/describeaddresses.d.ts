import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAddressesXAmzTargetEnum {
    AWSIESnowballJobManagementServiceDescribeAddresses = "AWSIESnowballJobManagementService.DescribeAddresses"
}
export declare class DescribeAddressesRequest extends SpeakeasyBase {
    describeAddressesRequest: shared.DescribeAddressesRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAddressesXAmzTargetEnum;
}
export declare class DescribeAddressesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAddressesResult?: shared.DescribeAddressesResult;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidResourceException
     */
    invalidResourceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
