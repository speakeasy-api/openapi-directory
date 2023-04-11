import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetContainerServiceMetricDataXAmzTargetEnum {
    Lightsail20161128GetContainerServiceMetricData = "Lightsail_20161128.GetContainerServiceMetricData"
}
export declare class GetContainerServiceMetricDataRequest extends SpeakeasyBase {
    getContainerServiceMetricDataRequest: shared.GetContainerServiceMetricDataRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetContainerServiceMetricDataXAmzTargetEnum;
}
export declare class GetContainerServiceMetricDataResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getContainerServiceMetricDataResult?: shared.GetContainerServiceMetricDataResult;
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
