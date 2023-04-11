import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateKeywordLeaseSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateKeywordLeaseRequest extends SpeakeasyBase {
    /**
     * A keyword lease object
     */
    keywordLease?: shared.KeywordLease;
    /**
     * To update a keyword lease
     */
    keyword: string;
}
export declare class UpdateKeywordLeaseResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
