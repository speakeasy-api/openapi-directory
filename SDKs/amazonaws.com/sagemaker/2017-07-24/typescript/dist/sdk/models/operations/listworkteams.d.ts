import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListWorkteamsXAmzTargetEnum {
    SageMakerListWorkteams = "SageMaker.ListWorkteams"
}
export declare class ListWorkteamsRequest extends SpeakeasyBase {
    listWorkteamsRequest: shared.ListWorkteamsRequest;
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
    xAmzTarget: ListWorkteamsXAmzTargetEnum;
}
export declare class ListWorkteamsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listWorkteamsResponse?: shared.ListWorkteamsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
