import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeUsersXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeUsers = "PhotonAdminProxyService.DescribeUsers"
}
export declare class DescribeUsersRequest extends SpeakeasyBase {
    describeUsersRequest: shared.DescribeUsersRequest;
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
    describeUsersResult?: shared.DescribeUsersResult;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
