import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetBlueprintsXAmzTargetEnum {
    AWSGlueBatchGetBlueprints = "AWSGlue.BatchGetBlueprints"
}
export declare class BatchGetBlueprintsRequest extends SpeakeasyBase {
    batchGetBlueprintsRequest: shared.BatchGetBlueprintsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetBlueprintsXAmzTargetEnum;
}
export declare class BatchGetBlueprintsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetBlueprintsResponse?: shared.BatchGetBlueprintsResponse;
    contentType: string;
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
