import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutEventsXAmzTargetEnum {
    AWSEventsPutEvents = "AWSEvents.PutEvents"
}
export declare class PutEventsRequest extends SpeakeasyBase {
    putEventsRequest: shared.PutEventsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutEventsXAmzTargetEnum;
}
export declare class PutEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * Success
     */
    putEventsResponse?: shared.PutEventsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
