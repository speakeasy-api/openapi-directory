import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeletePartnerEventSourceXAmzTargetEnum {
    AWSEventsDeletePartnerEventSource = "AWSEvents.DeletePartnerEventSource"
}
export declare class DeletePartnerEventSourceRequest extends SpeakeasyBase {
    deletePartnerEventSourceRequest: shared.DeletePartnerEventSourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePartnerEventSourceXAmzTargetEnum;
}
export declare class DeletePartnerEventSourceResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * OperationDisabledException
     */
    operationDisabledException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
