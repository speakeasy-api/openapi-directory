import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetBlueprintRunXAmzTargetEnum {
    AWSGlueGetBlueprintRun = "AWSGlue.GetBlueprintRun"
}
export declare class GetBlueprintRunRequest extends SpeakeasyBase {
    getBlueprintRunRequest: shared.GetBlueprintRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetBlueprintRunXAmzTargetEnum;
}
export declare class GetBlueprintRunResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getBlueprintRunResponse?: shared.GetBlueprintRunResponse;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
