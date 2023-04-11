import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListNotebookInstanceLifecycleConfigsXAmzTargetEnum {
    SageMakerListNotebookInstanceLifecycleConfigs = "SageMaker.ListNotebookInstanceLifecycleConfigs"
}
export declare class ListNotebookInstanceLifecycleConfigsRequest extends SpeakeasyBase {
    listNotebookInstanceLifecycleConfigsInput: shared.ListNotebookInstanceLifecycleConfigsInput;
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
    xAmzTarget: ListNotebookInstanceLifecycleConfigsXAmzTargetEnum;
}
export declare class ListNotebookInstanceLifecycleConfigsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listNotebookInstanceLifecycleConfigsOutput?: shared.ListNotebookInstanceLifecycleConfigsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
