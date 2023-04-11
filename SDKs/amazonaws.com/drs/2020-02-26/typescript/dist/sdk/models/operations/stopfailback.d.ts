import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StopFailbackRequestBody extends SpeakeasyBase {
    /**
     * The ID of the Recovery Instance we want to stop failback for.
     */
    recoveryInstanceID: string;
}
export declare class StopFailbackRequest extends SpeakeasyBase {
    requestBody: StopFailbackRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StopFailbackResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
}
