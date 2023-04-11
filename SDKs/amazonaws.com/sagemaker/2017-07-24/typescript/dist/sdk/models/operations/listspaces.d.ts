import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListSpacesXAmzTargetEnum {
    SageMakerListSpaces = "SageMaker.ListSpaces"
}
export declare class ListSpacesRequest extends SpeakeasyBase {
    listSpacesRequest: shared.ListSpacesRequest;
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
    xAmzTarget: ListSpacesXAmzTargetEnum;
}
export declare class ListSpacesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listSpacesResponse?: shared.ListSpacesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
