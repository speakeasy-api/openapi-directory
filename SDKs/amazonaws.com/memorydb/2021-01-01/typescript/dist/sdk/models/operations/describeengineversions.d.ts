import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEngineVersionsXAmzTargetEnum {
    AmazonMemoryDBDescribeEngineVersions = "AmazonMemoryDB.DescribeEngineVersions"
}
export declare class DescribeEngineVersionsRequest extends SpeakeasyBase {
    describeEngineVersionsRequest: shared.DescribeEngineVersionsRequest;
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
    xAmzTarget: DescribeEngineVersionsXAmzTargetEnum;
}
export declare class DescribeEngineVersionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEngineVersionsResponse?: shared.DescribeEngineVersionsResponse;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * ServiceLinkedRoleNotFoundFault
     */
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
