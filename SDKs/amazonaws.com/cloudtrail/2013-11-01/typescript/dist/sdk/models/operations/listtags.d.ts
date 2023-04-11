import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTagsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101ListTags = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags"
}
export declare class ListTagsRequest extends SpeakeasyBase {
    listTagsRequest: shared.ListTagsRequest;
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
    xAmzTarget: ListTagsXAmzTargetEnum;
}
export declare class ListTagsResponse extends SpeakeasyBase {
    /**
     * CloudTrailARNInvalidException
     */
    cloudTrailARNInvalidException?: any;
    contentType: string;
    /**
     * EventDataStoreNotFoundException
     */
    eventDataStoreNotFoundException?: any;
    /**
     * InactiveEventDataStoreException
     */
    inactiveEventDataStoreException?: any;
    /**
     * InvalidTokenException
     */
    invalidTokenException?: any;
    /**
     * InvalidTrailNameException
     */
    invalidTrailNameException?: any;
    /**
     * Success
     */
    listTagsResponse?: shared.ListTagsResponse;
    /**
     * NoManagementAccountSLRExistsException
     */
    noManagementAccountSLRExistsException?: any;
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
    /**
     * ResourceTypeNotSupportedException
     */
    resourceTypeNotSupportedException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
