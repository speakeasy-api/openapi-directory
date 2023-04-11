import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSavedFilterRequest extends SpeakeasyBase {
    /**
     * Saved Filter's identifier
     */
    identifier: string;
    /**
     * Project's identifier
     */
    projectSlug: string;
    /**
     * User's identifier
     */
    username: string;
}
export declare class GetSavedFilterResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * error payload
     */
    defaultPayload?: shared.DefaultPayload;
    /**
     * Successful operation
     */
    projectSavedFilter?: shared.ProjectSavedFilter;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
