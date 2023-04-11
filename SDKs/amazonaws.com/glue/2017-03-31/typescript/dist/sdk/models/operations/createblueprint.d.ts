import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateBlueprintXAmzTargetEnum {
    AWSGlueCreateBlueprint = "AWSGlue.CreateBlueprint"
}
export declare class CreateBlueprintRequest extends SpeakeasyBase {
    createBlueprintRequest: shared.CreateBlueprintRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateBlueprintXAmzTargetEnum;
}
export declare class CreateBlueprintResponse extends SpeakeasyBase {
    /**
     * AlreadyExistsException
     */
    alreadyExistsException?: any;
    contentType: string;
    /**
     * Success
     */
    createBlueprintResponse?: shared.CreateBlueprintResponse;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
}
