import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFormResponsesRequest extends SpeakeasyBase {
    /**
     * Restrict results to responses relating to this contribution.
     */
    contribution?: string;
    /**
     * Restrict results to responses submitted to this form.
     */
    form?: string;
    /**
     * Restrict results to responses submitted by this user.
     */
    user?: string;
}
export declare class GetFormResponsesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A list of form responses
     */
    formResponses?: shared.FormResponse[];
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
