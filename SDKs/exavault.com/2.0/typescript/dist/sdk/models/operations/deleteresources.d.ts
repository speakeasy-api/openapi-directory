import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteResourcesDeleteResourcesRequestBody extends SpeakeasyBase {
    /**
     * Resource identifiers of items to delete.
     */
    resources: string[];
}
export declare class DeleteResourcesRequest extends SpeakeasyBase {
    requestBody?: DeleteResourcesDeleteResourcesRequestBody;
    /**
     * Access Token
     */
    evAccessToken: string;
    /**
     * API Key
     */
    evApiKey: string;
}
export declare class DeleteResourcesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    emptyResponse?: shared.EmptyResponse;
    /**
     * Multi Response
     */
    resourceMultiResponse?: shared.ResourceMultiResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
