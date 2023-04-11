import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListSubscribedWorkteamsXAmzTargetEnum {
    SageMakerListSubscribedWorkteams = "SageMaker.ListSubscribedWorkteams"
}
export declare class ListSubscribedWorkteamsRequest extends SpeakeasyBase {
    listSubscribedWorkteamsRequest: shared.ListSubscribedWorkteamsRequest;
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
    xAmzTarget: ListSubscribedWorkteamsXAmzTargetEnum;
}
export declare class ListSubscribedWorkteamsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listSubscribedWorkteamsResponse?: shared.ListSubscribedWorkteamsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
