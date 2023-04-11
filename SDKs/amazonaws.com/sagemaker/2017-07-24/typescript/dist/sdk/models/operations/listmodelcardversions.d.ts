import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListModelCardVersionsXAmzTargetEnum {
    SageMakerListModelCardVersions = "SageMaker.ListModelCardVersions"
}
export declare class ListModelCardVersionsRequest extends SpeakeasyBase {
    listModelCardVersionsRequest: shared.ListModelCardVersionsRequest;
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
    xAmzTarget: ListModelCardVersionsXAmzTargetEnum;
}
export declare class ListModelCardVersionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listModelCardVersionsResponse?: shared.ListModelCardVersionsResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
