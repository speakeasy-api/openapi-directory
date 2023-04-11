import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetEventSelectorsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101GetEventSelectors = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors"
}
export declare class GetEventSelectorsRequest extends SpeakeasyBase {
    getEventSelectorsRequest: shared.GetEventSelectorsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEventSelectorsXAmzTargetEnum;
}
export declare class GetEventSelectorsResponse extends SpeakeasyBase {
    /**
     * CloudTrailARNInvalidException
     */
    cloudTrailARNInvalidException?: any;
    contentType: string;
    /**
     * Success
     */
    getEventSelectorsResponse?: shared.GetEventSelectorsResponse;
    /**
     * InvalidTrailNameException
     */
    invalidTrailNameException?: any;
    /**
     * NoManagementAccountSLRExistsException
     */
    noManagementAccountSLRExistsException?: any;
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
