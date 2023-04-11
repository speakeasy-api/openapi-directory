import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeParametersXAmzTargetEnum {
    AmazonMemoryDBDescribeParameters = "AmazonMemoryDB.DescribeParameters"
}
export declare class DescribeParametersRequest extends SpeakeasyBase {
    describeParametersRequest: shared.DescribeParametersRequest;
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
    xAmzTarget: DescribeParametersXAmzTargetEnum;
}
export declare class DescribeParametersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeParametersResponse?: shared.DescribeParametersResponse;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * ParameterGroupNotFoundFault
     */
    parameterGroupNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceLinkedRoleNotFoundFault
     */
    serviceLinkedRoleNotFoundFault?: any;
}
