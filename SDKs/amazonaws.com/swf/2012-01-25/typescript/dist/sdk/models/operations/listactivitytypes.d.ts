import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListActivityTypesXAmzTargetEnum {
    SimpleWorkflowServiceListActivityTypes = "SimpleWorkflowService.ListActivityTypes"
}
export declare class ListActivityTypesRequest extends SpeakeasyBase {
    listActivityTypesInput: shared.ListActivityTypesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListActivityTypesXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maximumPageSize?: string;
    /**
     * Pagination token
     */
    nextPageToken?: string;
}
export declare class ListActivityTypesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    activityTypeInfos?: shared.ActivityTypeInfos;
    contentType: string;
    /**
     * OperationNotPermittedFault
     */
    operationNotPermittedFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnknownResourceFault
     */
    unknownResourceFault?: any;
}
