import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartExportLabelsTaskRunXAmzTargetEnum {
    AWSGlueStartExportLabelsTaskRun = "AWSGlue.StartExportLabelsTaskRun"
}
export declare class StartExportLabelsTaskRunRequest extends SpeakeasyBase {
    startExportLabelsTaskRunRequest: shared.StartExportLabelsTaskRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartExportLabelsTaskRunXAmzTargetEnum;
}
export declare class StartExportLabelsTaskRunResponse extends SpeakeasyBase {
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
     * Success
     */
    startExportLabelsTaskRunResponse?: shared.StartExportLabelsTaskRunResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
