import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RemoveTagsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101RemoveTags = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags"
}
export declare class RemoveTagsRequest extends SpeakeasyBase {
    removeTagsRequest: shared.RemoveTagsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveTagsXAmzTargetEnum;
}
export declare class RemoveTagsResponse extends SpeakeasyBase {
    /**
     * ChannelNotFoundException
     */
    channelNotFoundException?: any;
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
     * Success
     */
    removeTagsResponse?: Record<string, any>;
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
