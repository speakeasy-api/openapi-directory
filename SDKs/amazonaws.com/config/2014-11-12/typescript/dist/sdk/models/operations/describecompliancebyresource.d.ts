import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeComplianceByResourceXAmzTargetEnum {
    StarlingDoveServiceDescribeComplianceByResource = "StarlingDoveService.DescribeComplianceByResource"
}
export declare class DescribeComplianceByResourceRequest extends SpeakeasyBase {
    describeComplianceByResourceRequest: shared.DescribeComplianceByResourceRequest;
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
    xAmzTarget: DescribeComplianceByResourceXAmzTargetEnum;
}
export declare class DescribeComplianceByResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeComplianceByResourceResponse?: shared.DescribeComplianceByResourceResponse;
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
