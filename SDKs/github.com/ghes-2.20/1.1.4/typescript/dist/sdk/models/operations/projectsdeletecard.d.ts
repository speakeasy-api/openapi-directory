import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProjectsDeleteCardRequest extends SpeakeasyBase {
    /**
     * card_id parameter
     */
    cardId: number;
}
/**
 * Forbidden
 */
export declare class ProjectsDeleteCard403ApplicationJSON extends SpeakeasyBase {
    documentationUrl?: string;
    errors?: string[];
    message?: string;
}
export declare class ProjectsDeleteCardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Forbidden
     */
    projectsDeleteCard403ApplicationJSONObject?: ProjectsDeleteCard403ApplicationJSON;
}
