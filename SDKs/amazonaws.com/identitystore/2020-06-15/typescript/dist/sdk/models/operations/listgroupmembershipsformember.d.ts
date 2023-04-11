import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListGroupMembershipsForMemberXAmzTargetEnum {
    AWSIdentityStoreListGroupMembershipsForMember = "AWSIdentityStore.ListGroupMembershipsForMember"
}
export declare class ListGroupMembershipsForMemberRequest extends SpeakeasyBase {
    listGroupMembershipsForMemberRequest: shared.ListGroupMembershipsForMemberRequest;
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
    xAmzTarget: ListGroupMembershipsForMemberXAmzTargetEnum;
}
export declare class ListGroupMembershipsForMemberResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listGroupMembershipsForMemberResponse?: shared.ListGroupMembershipsForMemberResponse;
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
