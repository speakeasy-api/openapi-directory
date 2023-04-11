import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteQueuedSavingsPlanRequestBody extends SpeakeasyBase {
    /**
     * The ID of the Savings Plan.
     */
    savingsPlanId: string;
}
export declare class DeleteQueuedSavingsPlanRequest extends SpeakeasyBase {
    requestBody: DeleteQueuedSavingsPlanRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteQueuedSavingsPlanResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteQueuedSavingsPlanResponse?: Record<string, any>;
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
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
