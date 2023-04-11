import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRequestsRequestBody extends SpeakeasyBase {
    /**
     * Destination filename (without extension) to request.
     */
    destination: string;
    /**
     * A list of group IDs to request the file from. If sent as a string, it should be comma-delimited.
     */
    groupIds?: string;
    /**
     * Folder path on which to request the file.
     */
    path: string;
    /**
     * A list of user IDs to request the file from. If sent as a string, it should be comma-delimited.
     */
    userIds?: string;
}
export declare class PostRequestsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The Requests object.
     */
    requestEntity?: shared.RequestEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
