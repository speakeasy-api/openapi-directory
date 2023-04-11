import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetInsightSelectorsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101GetInsightSelectors = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors"
}
export declare class GetInsightSelectorsRequest extends SpeakeasyBase {
    getInsightSelectorsRequest: shared.GetInsightSelectorsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetInsightSelectorsXAmzTargetEnum;
}
export declare class GetInsightSelectorsResponse extends SpeakeasyBase {
    /**
     * CloudTrailARNInvalidException
     */
    cloudTrailARNInvalidException?: any;
    contentType: string;
    /**
     * Success
     */
    getInsightSelectorsResponse?: shared.GetInsightSelectorsResponse;
    /**
     * InsightNotEnabledException
     */
    insightNotEnabledException?: any;
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
