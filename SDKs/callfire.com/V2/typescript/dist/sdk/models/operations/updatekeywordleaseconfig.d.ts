import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateKeywordLeaseConfigSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateKeywordLeaseConfigRequest extends SpeakeasyBase {
    /**
     * The configuration of a keyword lease object.
     */
    keywordConfig?: shared.KeywordConfig;
    /**
     * To update a keyword lease config
     */
    keyword: string;
}
export declare class UpdateKeywordLeaseConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
