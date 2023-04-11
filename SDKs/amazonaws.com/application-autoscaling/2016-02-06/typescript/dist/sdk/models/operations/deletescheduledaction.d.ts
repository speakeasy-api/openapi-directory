import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteScheduledActionXAmzTargetEnum {
    AnyScaleFrontendServiceDeleteScheduledAction = "AnyScaleFrontendService.DeleteScheduledAction"
}
export declare class DeleteScheduledActionRequest extends SpeakeasyBase {
    deleteScheduledActionRequest: shared.DeleteScheduledActionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteScheduledActionXAmzTargetEnum;
}
export declare class DeleteScheduledActionResponse extends SpeakeasyBase {
    /**
     * ConcurrentUpdateException
     */
    concurrentUpdateException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteScheduledActionResponse?: Record<string, any>;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * ObjectNotFoundException
     */
    objectNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
