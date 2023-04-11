import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum IsMemberInGroupsXAmzTargetEnum {
    AWSIdentityStoreIsMemberInGroups = "AWSIdentityStore.IsMemberInGroups"
}
export declare class IsMemberInGroupsRequest extends SpeakeasyBase {
    isMemberInGroupsRequest: shared.IsMemberInGroupsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: IsMemberInGroupsXAmzTargetEnum;
}
export declare class IsMemberInGroupsResponse extends SpeakeasyBase {
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
    isMemberInGroupsResponse?: shared.IsMemberInGroupsResponse;
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
