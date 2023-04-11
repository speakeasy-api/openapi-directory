import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListModelQualityJobDefinitionsXAmzTargetEnum {
    SageMakerListModelQualityJobDefinitions = "SageMaker.ListModelQualityJobDefinitions"
}
export declare class ListModelQualityJobDefinitionsRequest extends SpeakeasyBase {
    listModelQualityJobDefinitionsRequest: shared.ListModelQualityJobDefinitionsRequest;
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
    xAmzTarget: ListModelQualityJobDefinitionsXAmzTargetEnum;
}
export declare class ListModelQualityJobDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listModelQualityJobDefinitionsResponse?: shared.ListModelQualityJobDefinitionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
