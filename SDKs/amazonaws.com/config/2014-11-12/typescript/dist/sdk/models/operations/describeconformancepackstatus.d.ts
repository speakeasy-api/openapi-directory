import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeConformancePackStatusXAmzTargetEnum {
    StarlingDoveServiceDescribeConformancePackStatus = "StarlingDoveService.DescribeConformancePackStatus"
}
export declare class DescribeConformancePackStatusRequest extends SpeakeasyBase {
    describeConformancePackStatusRequest: shared.DescribeConformancePackStatusRequest;
    /**
     * Pagination limit
     */
    limit?: string;
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
    xAmzTarget: DescribeConformancePackStatusXAmzTargetEnum;
}
export declare class DescribeConformancePackStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeConformancePackStatusResponse?: shared.DescribeConformancePackStatusResponse;
    /**
     * InvalidLimitException
     */
    invalidLimitException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
