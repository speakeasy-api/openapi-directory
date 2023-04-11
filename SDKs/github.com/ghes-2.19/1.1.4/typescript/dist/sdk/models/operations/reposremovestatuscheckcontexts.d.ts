import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposRemoveStatusCheckContextsRequestBody1 extends SpeakeasyBase {
    /**
     * contexts parameter
     */
    contexts: string[];
}
export declare class ReposRemoveStatusCheckContextsRequest extends SpeakeasyBase {
    requestBody?: any;
    /**
     * The name of the branch.
     */
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposRemoveStatusCheckContextsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    reposRemoveStatusCheckContexts200ApplicationJSONStrings?: string[];
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
