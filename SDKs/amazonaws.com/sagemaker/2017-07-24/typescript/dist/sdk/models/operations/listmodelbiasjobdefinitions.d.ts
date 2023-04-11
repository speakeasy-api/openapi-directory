import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListModelBiasJobDefinitionsXAmzTargetEnum {
    SageMakerListModelBiasJobDefinitions = "SageMaker.ListModelBiasJobDefinitions"
}
export declare class ListModelBiasJobDefinitionsRequest extends SpeakeasyBase {
    listModelBiasJobDefinitionsRequest: shared.ListModelBiasJobDefinitionsRequest;
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
    xAmzTarget: ListModelBiasJobDefinitionsXAmzTargetEnum;
}
export declare class ListModelBiasJobDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listModelBiasJobDefinitionsResponse?: shared.ListModelBiasJobDefinitionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
