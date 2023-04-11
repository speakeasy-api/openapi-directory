import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutPartnerEventsXAmzTargetEnum {
    AWSEventsPutPartnerEvents = "AWSEvents.PutPartnerEvents"
}
export declare class PutPartnerEventsRequest extends SpeakeasyBase {
    putPartnerEventsRequest: shared.PutPartnerEventsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutPartnerEventsXAmzTargetEnum;
}
export declare class PutPartnerEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * OperationDisabledException
     */
    operationDisabledException?: any;
    /**
     * Success
     */
    putPartnerEventsResponse?: shared.PutPartnerEventsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
