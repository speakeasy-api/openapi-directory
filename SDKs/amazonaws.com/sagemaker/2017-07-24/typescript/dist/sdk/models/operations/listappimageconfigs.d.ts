import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAppImageConfigsXAmzTargetEnum {
    SageMakerListAppImageConfigs = "SageMaker.ListAppImageConfigs"
}
export declare class ListAppImageConfigsRequest extends SpeakeasyBase {
    listAppImageConfigsRequest: shared.ListAppImageConfigsRequest;
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
    xAmzTarget: ListAppImageConfigsXAmzTargetEnum;
}
export declare class ListAppImageConfigsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listAppImageConfigsResponse?: shared.ListAppImageConfigsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
