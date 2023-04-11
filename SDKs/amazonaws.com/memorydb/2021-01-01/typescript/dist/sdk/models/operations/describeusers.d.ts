import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeUsersXAmzTargetEnum {
    AmazonMemoryDBDescribeUsers = "AmazonMemoryDB.DescribeUsers"
}
export declare class DescribeUsersRequest extends SpeakeasyBase {
    describeUsersRequest: shared.DescribeUsersRequest;
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
    xAmzTarget: DescribeUsersXAmzTargetEnum;
}
export declare class DescribeUsersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeUsersResponse?: shared.DescribeUsersResponse;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UserNotFoundFault
     */
    userNotFoundFault?: any;
}
