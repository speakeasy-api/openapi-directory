import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListExperimentsXAmzTargetEnum {
    SageMakerListExperiments = "SageMaker.ListExperiments"
}
export declare class ListExperimentsRequest extends SpeakeasyBase {
    listExperimentsRequest: shared.ListExperimentsRequest;
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
    xAmzTarget: ListExperimentsXAmzTargetEnum;
}
export declare class ListExperimentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listExperimentsResponse?: shared.ListExperimentsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
