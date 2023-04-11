import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartLoggingXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101StartLogging = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging"
}
export declare class StartLoggingRequest extends SpeakeasyBase {
    startLoggingRequest: shared.StartLoggingRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartLoggingXAmzTargetEnum;
}
export declare class StartLoggingResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    startLoggingResponse?: Record<string, any>;
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
