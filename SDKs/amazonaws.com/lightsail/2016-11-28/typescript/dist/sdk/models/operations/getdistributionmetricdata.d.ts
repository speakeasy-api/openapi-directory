import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDistributionMetricDataXAmzTargetEnum {
    Lightsail20161128GetDistributionMetricData = "Lightsail_20161128.GetDistributionMetricData"
}
export declare class GetDistributionMetricDataRequest extends SpeakeasyBase {
    getDistributionMetricDataRequest: shared.GetDistributionMetricDataRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDistributionMetricDataXAmzTargetEnum;
}
export declare class GetDistributionMetricDataResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getDistributionMetricDataResult?: shared.GetDistributionMetricDataResult;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * OperationFailureException
     */
    operationFailureException?: any;
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
