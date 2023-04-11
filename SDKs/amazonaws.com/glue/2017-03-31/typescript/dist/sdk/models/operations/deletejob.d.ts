import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteJobXAmzTargetEnum {
    AWSGlueDeleteJob = "AWSGlue.DeleteJob"
}
export declare class DeleteJobRequest extends SpeakeasyBase {
    deleteJobRequest: shared.DeleteJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteJobXAmzTargetEnum;
}
export declare class DeleteJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteJobResponse?: shared.DeleteJobResponse;
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
