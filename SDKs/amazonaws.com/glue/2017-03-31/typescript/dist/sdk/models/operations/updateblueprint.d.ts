import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateBlueprintXAmzTargetEnum {
    AWSGlueUpdateBlueprint = "AWSGlue.UpdateBlueprint"
}
export declare class UpdateBlueprintRequest extends SpeakeasyBase {
    updateBlueprintRequest: shared.UpdateBlueprintRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateBlueprintXAmzTargetEnum;
}
export declare class UpdateBlueprintResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateBlueprintResponse?: shared.UpdateBlueprintResponse;
}
