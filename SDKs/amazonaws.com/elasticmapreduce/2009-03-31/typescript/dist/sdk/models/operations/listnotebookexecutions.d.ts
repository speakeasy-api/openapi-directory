import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListNotebookExecutionsXAmzTargetEnum {
    ElasticMapReduceListNotebookExecutions = "ElasticMapReduce.ListNotebookExecutions"
}
export declare class ListNotebookExecutionsRequest extends SpeakeasyBase {
    listNotebookExecutionsInput: shared.ListNotebookExecutionsInput;
    /**
     * Pagination token
     */
    marker?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListNotebookExecutionsXAmzTargetEnum;
}
export declare class ListNotebookExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listNotebookExecutionsOutput?: shared.ListNotebookExecutionsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
