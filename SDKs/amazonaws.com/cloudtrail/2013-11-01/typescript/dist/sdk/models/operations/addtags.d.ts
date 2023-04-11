import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddTagsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101AddTags = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags"
}
export declare class AddTagsRequest extends SpeakeasyBase {
    addTagsRequest: shared.AddTagsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddTagsXAmzTargetEnum;
}
export declare class AddTagsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addTagsResponse?: Record<string, any>;
    /**
     * ChannelNotFoundException
     */
    channelNotFoundException?: any;
    /**
     * CloudTrailARNInvalidException
     */
    cloudTrailARNInvalidException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
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
     * InvalidTagParameterException
     */
    invalidTagParameterException?: any;
    /**
     * InvalidTrailNameException
     */
    invalidTrailNameException?: any;
    /**
     * NoManagementAccountSLRExistsException
     */
    noManagementAccountSLRExistsException?: any;
    /**
     * NotOrganizationMasterAccountException
     */
    notOrganizationMasterAccountException?: any;
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
     * TagsLimitExceededException
     */
    tagsLimitExceededException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
