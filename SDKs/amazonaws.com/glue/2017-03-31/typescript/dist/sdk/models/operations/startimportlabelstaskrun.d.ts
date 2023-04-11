import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartImportLabelsTaskRunXAmzTargetEnum {
    AWSGlueStartImportLabelsTaskRun = "AWSGlue.StartImportLabelsTaskRun"
}
export declare class StartImportLabelsTaskRunRequest extends SpeakeasyBase {
    startImportLabelsTaskRunRequest: shared.StartImportLabelsTaskRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartImportLabelsTaskRunXAmzTargetEnum;
}
export declare class StartImportLabelsTaskRunResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
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
    startImportLabelsTaskRunResponse?: shared.StartImportLabelsTaskRunResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
