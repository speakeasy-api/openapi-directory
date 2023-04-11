import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutScheduledActionXAmzTargetEnum {
    AnyScaleFrontendServicePutScheduledAction = "AnyScaleFrontendService.PutScheduledAction"
}
export declare class PutScheduledActionRequest extends SpeakeasyBase {
    putScheduledActionRequest: shared.PutScheduledActionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutScheduledActionXAmzTargetEnum;
}
export declare class PutScheduledActionResponse extends SpeakeasyBase {
    /**
     * ConcurrentUpdateException
     */
    concurrentUpdateException?: any;
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ObjectNotFoundException
     */
    objectNotFoundException?: any;
    /**
     * Success
     */
    putScheduledActionResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
