import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListFlowDefinitionsXAmzTargetEnum {
    SageMakerListFlowDefinitions = "SageMaker.ListFlowDefinitions"
}
export declare class ListFlowDefinitionsRequest extends SpeakeasyBase {
    listFlowDefinitionsRequest: shared.ListFlowDefinitionsRequest;
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
    xAmzTarget: ListFlowDefinitionsXAmzTargetEnum;
}
export declare class ListFlowDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listFlowDefinitionsResponse?: shared.ListFlowDefinitionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
