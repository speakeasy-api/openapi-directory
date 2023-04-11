import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartBlueprintRunXAmzTargetEnum {
    AWSGlueStartBlueprintRun = "AWSGlue.StartBlueprintRun"
}
export declare class StartBlueprintRunRequest extends SpeakeasyBase {
    startBlueprintRunRequest: shared.StartBlueprintRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartBlueprintRunXAmzTargetEnum;
}
export declare class StartBlueprintRunResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * IllegalBlueprintStateException
     */
    illegalBlueprintStateException?: any;
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
    /**
     * ResourceNumberLimitExceededException
     */
    resourceNumberLimitExceededException?: any;
    /**
     * Success
     */
    startBlueprintRunResponse?: shared.StartBlueprintRunResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
