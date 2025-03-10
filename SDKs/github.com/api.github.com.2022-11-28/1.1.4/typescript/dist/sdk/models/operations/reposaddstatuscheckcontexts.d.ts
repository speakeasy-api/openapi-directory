import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposAddStatusCheckContextsRequestBody1 extends SpeakeasyBase {
    /**
     * The name of the status checks
     */
    contexts: string[];
}
export declare class ReposAddStatusCheckContextsRequest extends SpeakeasyBase {
    requestBody?: any;
    /**
     * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
     */
    branch: string;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
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
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
