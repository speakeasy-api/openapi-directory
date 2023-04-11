import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSnippetsSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
/**
 * Filter down the result based on the authenticated user's role (`owner`, `contributor`, or `member`).
 */
export declare enum GetSnippetsRoleEnum {
    Owner = "owner",
    Contributor = "contributor",
    Member = "member"
}
export declare class GetSnippetsRequest extends SpeakeasyBase {
    /**
     * Filter down the result based on the authenticated user's role (`owner`, `contributor`, or `member`).
     */
    role?: GetSnippetsRoleEnum;
}
export declare class GetSnippetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the snippet does not exist.
     */
    error?: Record<string, any>;
    /**
     * A paginated list of snippets.
     */
    paginatedSnippets?: shared.PaginatedSnippets;
}
