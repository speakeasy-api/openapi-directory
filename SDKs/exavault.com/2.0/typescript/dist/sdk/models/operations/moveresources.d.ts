import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MoveResourcesMoveResourcesRequestBody extends SpeakeasyBase {
    /**
     * Resource identifier of folder to move files/folders to.
     */
    parentResource: string;
    /**
     * Array containing file/folder paths to move.
     */
    resources: string[];
}
export declare class MoveResourcesRequest extends SpeakeasyBase {
    requestBody?: MoveResourcesMoveResourcesRequestBody;
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
}
export declare class MoveResourcesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    resourceCopyMove?: shared.ResourceCopyMove;
    /**
     * Multi Response
     */
    resourceMultiResponse?: shared.ResourceMultiResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
