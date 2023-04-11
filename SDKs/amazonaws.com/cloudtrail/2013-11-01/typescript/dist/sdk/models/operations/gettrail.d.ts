import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetTrailXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101GetTrail = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail"
}
export declare class GetTrailRequest extends SpeakeasyBase {
    getTrailRequest: shared.GetTrailRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTrailXAmzTargetEnum;
}
export declare class GetTrailResponse extends SpeakeasyBase {
    /**
     * CloudTrailARNInvalidException
     */
    cloudTrailARNInvalidException?: any;
    contentType: string;
    /**
     * Success
     */
    getTrailResponse?: shared.GetTrailResponse;
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
