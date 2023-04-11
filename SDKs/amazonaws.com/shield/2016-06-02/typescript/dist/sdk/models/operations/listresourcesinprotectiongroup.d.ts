import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListResourcesInProtectionGroupXAmzTargetEnum {
    AWSShield20160616ListResourcesInProtectionGroup = "AWSShield_20160616.ListResourcesInProtectionGroup"
}
export declare class ListResourcesInProtectionGroupRequest extends SpeakeasyBase {
    listResourcesInProtectionGroupRequest: shared.ListResourcesInProtectionGroupRequest;
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
    xAmzTarget: ListResourcesInProtectionGroupXAmzTargetEnum;
}
export declare class ListResourcesInProtectionGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidPaginationTokenException
     */
    invalidPaginationTokenException?: any;
    /**
     * Success
     */
    listResourcesInProtectionGroupResponse?: shared.ListResourcesInProtectionGroupResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
