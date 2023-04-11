import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListWorkforcesXAmzTargetEnum {
    SageMakerListWorkforces = "SageMaker.ListWorkforces"
}
export declare class ListWorkforcesRequest extends SpeakeasyBase {
    listWorkforcesRequest: shared.ListWorkforcesRequest;
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
    xAmzTarget: ListWorkforcesXAmzTargetEnum;
}
export declare class ListWorkforcesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listWorkforcesResponse?: shared.ListWorkforcesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
