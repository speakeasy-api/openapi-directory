import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListModelsXAmzTargetEnum {
    SageMakerListModels = "SageMaker.ListModels"
}
export declare class ListModelsRequest extends SpeakeasyBase {
    listModelsInput: shared.ListModelsInput;
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
    xAmzTarget: ListModelsXAmzTargetEnum;
}
export declare class ListModelsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listModelsOutput?: shared.ListModelsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
