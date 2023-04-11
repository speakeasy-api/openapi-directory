import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeGroupMembershipXAmzTargetEnum {
    AWSIdentityStoreDescribeGroupMembership = "AWSIdentityStore.DescribeGroupMembership"
}
export declare class DescribeGroupMembershipRequest extends SpeakeasyBase {
    describeGroupMembershipRequest: shared.DescribeGroupMembershipRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeGroupMembershipXAmzTargetEnum;
}
export declare class DescribeGroupMembershipResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeGroupMembershipResponse?: shared.DescribeGroupMembershipResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
