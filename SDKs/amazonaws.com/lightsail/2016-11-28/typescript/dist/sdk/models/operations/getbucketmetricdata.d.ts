import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetBucketMetricDataXAmzTargetEnum {
    Lightsail20161128GetBucketMetricData = "Lightsail_20161128.GetBucketMetricData"
}
export declare class GetBucketMetricDataRequest extends SpeakeasyBase {
    getBucketMetricDataRequest: shared.GetBucketMetricDataRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetBucketMetricDataXAmzTargetEnum;
}
export declare class GetBucketMetricDataResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getBucketMetricDataResult?: shared.GetBucketMetricDataResult;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthenticatedException
     */
    unauthenticatedException?: any;
}
