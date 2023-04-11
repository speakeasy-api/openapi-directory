import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListNotebookInstancesXAmzTargetEnum {
    SageMakerListNotebookInstances = "SageMaker.ListNotebookInstances"
}
export declare class ListNotebookInstancesRequest extends SpeakeasyBase {
    listNotebookInstancesInput: shared.ListNotebookInstancesInput;
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
    xAmzTarget: ListNotebookInstancesXAmzTargetEnum;
}
export declare class ListNotebookInstancesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listNotebookInstancesOutput?: shared.ListNotebookInstancesOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
