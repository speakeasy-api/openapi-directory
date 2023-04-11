import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreatePartnerEventSourceXAmzTargetEnum {
    AWSEventsCreatePartnerEventSource = "AWSEvents.CreatePartnerEventSource"
}
export declare class CreatePartnerEventSourceRequest extends SpeakeasyBase {
    createPartnerEventSourceRequest: shared.CreatePartnerEventSourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePartnerEventSourceXAmzTargetEnum;
}
export declare class CreatePartnerEventSourceResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    createPartnerEventSourceResponse?: shared.CreatePartnerEventSourceResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * OperationDisabledException
     */
    operationDisabledException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
