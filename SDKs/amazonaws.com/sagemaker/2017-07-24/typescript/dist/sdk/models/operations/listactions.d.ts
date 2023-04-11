import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListActionsXAmzTargetEnum {
    SageMakerListActions = "SageMaker.ListActions"
}
export declare class ListActionsRequest extends SpeakeasyBase {
    listActionsRequest: shared.ListActionsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListActionsXAmzTargetEnum;
}
export declare class ListActionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listActionsResponse?: shared.ListActionsResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
