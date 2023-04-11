import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListModelCardsXAmzTargetEnum {
    SageMakerListModelCards = "SageMaker.ListModelCards"
}
export declare class ListModelCardsRequest extends SpeakeasyBase {
    listModelCardsRequest: shared.ListModelCardsRequest;
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
    xAmzTarget: ListModelCardsXAmzTargetEnum;
}
export declare class ListModelCardsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listModelCardsResponse?: shared.ListModelCardsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
