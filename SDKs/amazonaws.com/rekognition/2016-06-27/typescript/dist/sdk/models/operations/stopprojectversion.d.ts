import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopProjectVersionXAmzTargetEnum {
    RekognitionServiceStopProjectVersion = "RekognitionService.StopProjectVersion"
}
export declare class StopProjectVersionRequest extends SpeakeasyBase {
    stopProjectVersionRequest: shared.StopProjectVersionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopProjectVersionXAmzTargetEnum;
}
export declare class StopProjectVersionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ProvisionedThroughputExceededException
     */
    provisionedThroughputExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    stopProjectVersionResponse?: shared.StopProjectVersionResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
