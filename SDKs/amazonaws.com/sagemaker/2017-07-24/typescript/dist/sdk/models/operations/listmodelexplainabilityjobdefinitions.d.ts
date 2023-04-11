import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListModelExplainabilityJobDefinitionsXAmzTargetEnum {
    SageMakerListModelExplainabilityJobDefinitions = "SageMaker.ListModelExplainabilityJobDefinitions"
}
export declare class ListModelExplainabilityJobDefinitionsRequest extends SpeakeasyBase {
    listModelExplainabilityJobDefinitionsRequest: shared.ListModelExplainabilityJobDefinitionsRequest;
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
    xAmzTarget: ListModelExplainabilityJobDefinitionsXAmzTargetEnum;
}
export declare class ListModelExplainabilityJobDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listModelExplainabilityJobDefinitionsResponse?: shared.ListModelExplainabilityJobDefinitionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
