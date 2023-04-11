import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListCandidatesForAutoMLJobXAmzTargetEnum {
    SageMakerListCandidatesForAutoMLJob = "SageMaker.ListCandidatesForAutoMLJob"
}
export declare class ListCandidatesForAutoMLJobRequest extends SpeakeasyBase {
    listCandidatesForAutoMLJobRequest: shared.ListCandidatesForAutoMLJobRequest;
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
    xAmzTarget: ListCandidatesForAutoMLJobXAmzTargetEnum;
}
export declare class ListCandidatesForAutoMLJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listCandidatesForAutoMLJobResponse?: shared.ListCandidatesForAutoMLJobResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
