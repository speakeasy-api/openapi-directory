import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListBuildBatchesXAmzTargetEnum {
    CodeBuild20161006ListBuildBatches = "CodeBuild_20161006.ListBuildBatches"
}
export declare class ListBuildBatchesRequest extends SpeakeasyBase {
    listBuildBatchesInput: shared.ListBuildBatchesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListBuildBatchesXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListBuildBatchesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    listBuildBatchesOutput?: shared.ListBuildBatchesOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
