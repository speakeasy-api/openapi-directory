import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReactionsDeleteLegacyRequest extends SpeakeasyBase {
    reactionId: number;
}
/**
 * Preview header missing
 */
export declare class ReactionsDeleteLegacy415ApplicationJSON extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReactionsDeleteLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Preview header missing
     */
    reactionsDeleteLegacy415ApplicationJSONObject?: ReactionsDeleteLegacy415ApplicationJSON;
}
