import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListPartnerEventSourcesXAmzTargetEnum {
    AWSEventsListPartnerEventSources = "AWSEvents.ListPartnerEventSources"
}
export declare class ListPartnerEventSourcesRequest extends SpeakeasyBase {
    listPartnerEventSourcesRequest: shared.ListPartnerEventSourcesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPartnerEventSourcesXAmzTargetEnum;
}
export declare class ListPartnerEventSourcesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * Success
     */
    listPartnerEventSourcesResponse?: shared.ListPartnerEventSourcesResponse;
    /**
     * OperationDisabledException
     */
    operationDisabledException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
