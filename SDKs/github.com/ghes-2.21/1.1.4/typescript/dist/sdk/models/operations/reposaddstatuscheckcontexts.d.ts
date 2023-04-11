import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposAddStatusCheckContextsRequestBody1 extends SpeakeasyBase {
    /**
     * contexts parameter
     */
    contexts: string[];
}
export declare class ReposAddStatusCheckContextsRequest extends SpeakeasyBase {
    requestBody?: any;
    /**
     * The name of the branch.
     */
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposAddStatusCheckContextsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    reposAddStatusCheckContexts200ApplicationJSONStrings?: string[];
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
