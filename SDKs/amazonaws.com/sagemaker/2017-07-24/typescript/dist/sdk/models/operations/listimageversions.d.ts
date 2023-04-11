import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListImageVersionsXAmzTargetEnum {
    SageMakerListImageVersions = "SageMaker.ListImageVersions"
}
export declare class ListImageVersionsRequest extends SpeakeasyBase {
    listImageVersionsRequest: shared.ListImageVersionsRequest;
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
    xAmzTarget: ListImageVersionsXAmzTargetEnum;
}
export declare class ListImageVersionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listImageVersionsResponse?: shared.ListImageVersionsResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
