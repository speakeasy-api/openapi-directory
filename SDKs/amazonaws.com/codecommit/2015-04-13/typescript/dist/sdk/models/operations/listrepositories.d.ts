import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListRepositoriesXAmzTargetEnum {
    CodeCommit20150413ListRepositories = "CodeCommit_20150413.ListRepositories"
}
export declare class ListRepositoriesRequest extends SpeakeasyBase {
    listRepositoriesInput: shared.ListRepositoriesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRepositoriesXAmzTargetEnum;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListRepositoriesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidContinuationTokenException
     */
    invalidContinuationTokenException?: any;
    /**
     * InvalidOrderException
     */
    invalidOrderException?: any;
    /**
     * InvalidSortByException
     */
    invalidSortByException?: any;
    /**
     * Success
     */
    listRepositoriesOutput?: shared.ListRepositoriesOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
