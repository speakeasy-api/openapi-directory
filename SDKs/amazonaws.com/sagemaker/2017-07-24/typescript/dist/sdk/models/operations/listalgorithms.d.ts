import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAlgorithmsXAmzTargetEnum {
    SageMakerListAlgorithms = "SageMaker.ListAlgorithms"
}
export declare class ListAlgorithmsRequest extends SpeakeasyBase {
    listAlgorithmsInput: shared.ListAlgorithmsInput;
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
    xAmzTarget: ListAlgorithmsXAmzTargetEnum;
}
export declare class ListAlgorithmsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listAlgorithmsOutput?: shared.ListAlgorithmsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
