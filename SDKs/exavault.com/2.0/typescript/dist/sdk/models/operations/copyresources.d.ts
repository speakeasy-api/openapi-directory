import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CopyResourcesCopyResourcesRequestBody extends SpeakeasyBase {
    /**
     * Resource identifier for folder where items will be copied to.
     */
    parentResource: string;
    /**
     * Resource identifier(s) of items to be copied to a new location
     */
    resources: string[];
}
export declare class CopyResourcesRequest extends SpeakeasyBase {
    requestBody?: CopyResourcesCopyResourcesRequestBody;
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
}
export declare class CopyResourcesResponse extends SpeakeasyBase {
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
