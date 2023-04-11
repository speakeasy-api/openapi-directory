import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetTrailStatusXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101GetTrailStatus = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus"
}
export declare class GetTrailStatusRequest extends SpeakeasyBase {
    getTrailStatusRequest: shared.GetTrailStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTrailStatusXAmzTargetEnum;
}
export declare class GetTrailStatusResponse extends SpeakeasyBase {
    /**
     * CloudTrailARNInvalidException
     */
    cloudTrailARNInvalidException?: any;
    contentType: string;
    /**
     * Success
     */
    getTrailStatusResponse?: shared.GetTrailStatusResponse;
    /**
     * InvalidTrailNameException
     */
    invalidTrailNameException?: any;
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
