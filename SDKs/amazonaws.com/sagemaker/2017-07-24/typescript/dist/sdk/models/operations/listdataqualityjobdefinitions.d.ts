import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDataQualityJobDefinitionsXAmzTargetEnum {
    SageMakerListDataQualityJobDefinitions = "SageMaker.ListDataQualityJobDefinitions"
}
export declare class ListDataQualityJobDefinitionsRequest extends SpeakeasyBase {
    listDataQualityJobDefinitionsRequest: shared.ListDataQualityJobDefinitionsRequest;
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
    xAmzTarget: ListDataQualityJobDefinitionsXAmzTargetEnum;
}
export declare class ListDataQualityJobDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listDataQualityJobDefinitionsResponse?: shared.ListDataQualityJobDefinitionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
