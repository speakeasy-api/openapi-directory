import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteTrailXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteTrail = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail"
}
export declare class DeleteTrailRequest extends SpeakeasyBase {
    deleteTrailRequest: shared.DeleteTrailRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTrailXAmzTargetEnum;
}
export declare class DeleteTrailResponse extends SpeakeasyBase {
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
     * Success
     */
    deleteTrailResponse?: Record<string, any>;
    /**
     * InsufficientDependencyServiceAccessPermissionException
     */
    insufficientDependencyServiceAccessPermissionException?: any;
    /**
     * InvalidHomeRegionException
     */
    invalidHomeRegionException?: any;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TrailNotFoundException
     */
    trailNotFoundException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
