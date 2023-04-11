import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListApiDestinationsXAmzTargetEnum {
    AWSEventsListApiDestinations = "AWSEvents.ListApiDestinations"
}
export declare class ListApiDestinationsRequest extends SpeakeasyBase {
    listApiDestinationsRequest: shared.ListApiDestinationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListApiDestinationsXAmzTargetEnum;
}
export declare class ListApiDestinationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * Success
     */
    listApiDestinationsResponse?: shared.ListApiDestinationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
