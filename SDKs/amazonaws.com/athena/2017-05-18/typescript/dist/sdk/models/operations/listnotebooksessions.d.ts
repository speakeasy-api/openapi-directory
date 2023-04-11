import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListNotebookSessionsXAmzTargetEnum {
    AmazonAthenaListNotebookSessions = "AmazonAthena.ListNotebookSessions"
}
export declare class ListNotebookSessionsRequest extends SpeakeasyBase {
    listNotebookSessionsRequest: shared.ListNotebookSessionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListNotebookSessionsXAmzTargetEnum;
}
export declare class ListNotebookSessionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listNotebookSessionsResponse?: shared.ListNotebookSessionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
