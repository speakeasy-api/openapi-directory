import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CancelJobRunRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the job run to cancel.
     */
    jobRunId: string;
    /**
     * The ID of the virtual cluster for which the job run will be canceled.
     */
    virtualClusterId: string;
}
export declare class CancelJobRunResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelJobRunResponse?: shared.CancelJobRunResponse;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
