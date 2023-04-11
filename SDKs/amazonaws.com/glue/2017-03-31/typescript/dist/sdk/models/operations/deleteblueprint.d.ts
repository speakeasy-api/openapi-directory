import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteBlueprintXAmzTargetEnum {
    AWSGlueDeleteBlueprint = "AWSGlue.DeleteBlueprint"
}
export declare class DeleteBlueprintRequest extends SpeakeasyBase {
    deleteBlueprintRequest: shared.DeleteBlueprintRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteBlueprintXAmzTargetEnum;
}
export declare class DeleteBlueprintResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteBlueprintResponse?: shared.DeleteBlueprintResponse;
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
