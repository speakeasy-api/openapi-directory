import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTrialComponentsXAmzTargetEnum {
    SageMakerListTrialComponents = "SageMaker.ListTrialComponents"
}
export declare class ListTrialComponentsRequest extends SpeakeasyBase {
    listTrialComponentsRequest: shared.ListTrialComponentsRequest;
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
    xAmzTarget: ListTrialComponentsXAmzTargetEnum;
}
export declare class ListTrialComponentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listTrialComponentsResponse?: shared.ListTrialComponentsResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
