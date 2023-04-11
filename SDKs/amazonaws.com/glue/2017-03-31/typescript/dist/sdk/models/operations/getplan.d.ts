import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetPlanXAmzTargetEnum {
    AWSGlueGetPlan = "AWSGlue.GetPlan"
}
export declare class GetPlanRequest extends SpeakeasyBase {
    getPlanRequest: shared.GetPlanRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPlanXAmzTargetEnum;
}
export declare class GetPlanResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getPlanResponse?: shared.GetPlanResponse;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
