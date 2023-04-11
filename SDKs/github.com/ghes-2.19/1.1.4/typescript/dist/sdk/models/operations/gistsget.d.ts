import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GistsGetRequest extends SpeakeasyBase {
    /**
     * gist_id parameter
     */
    gistId: string;
}
export declare class GistsGet403ApplicationJSONBlock extends SpeakeasyBase {
    createdAt?: string;
    htmlUrl?: string;
    reason?: string;
}
/**
 * Forbidden Gist
 */
export declare class GistsGet403ApplicationJSON extends SpeakeasyBase {
    block?: GistsGet403ApplicationJSONBlock;
    documentationUrl?: string;
    message?: string;
}
export declare class GistsGetResponse extends SpeakeasyBase {
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
    gistSimple?: shared.GistSimple;
    /**
     * Forbidden Gist
     */
    gistsGet403ApplicationJSONObject?: GistsGet403ApplicationJSON;
}
