import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListCodeRepositoriesXAmzTargetEnum {
    SageMakerListCodeRepositories = "SageMaker.ListCodeRepositories"
}
export declare class ListCodeRepositoriesRequest extends SpeakeasyBase {
    listCodeRepositoriesInput: shared.ListCodeRepositoriesInput;
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
    xAmzTarget: ListCodeRepositoriesXAmzTargetEnum;
}
export declare class ListCodeRepositoriesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listCodeRepositoriesOutput?: shared.ListCodeRepositoriesOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
