import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTrialsXAmzTargetEnum {
    SageMakerListTrials = "SageMaker.ListTrials"
}
export declare class ListTrialsRequest extends SpeakeasyBase {
    listTrialsRequest: shared.ListTrialsRequest;
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
    xAmzTarget: ListTrialsXAmzTargetEnum;
}
export declare class ListTrialsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listTrialsResponse?: shared.ListTrialsResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
